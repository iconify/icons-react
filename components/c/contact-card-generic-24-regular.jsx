import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ffn23gb4g {
  fill: currentColor;
  d: path("M19.75 4A2.25 2.25 0 0 1 22 6.25v11.5A2.25 2.25 0 0 1 19.75 20H4.25A2.25 2.25 0 0 1 2 17.75V6.25A2.25 2.25 0 0 1 4.25 4zM4.25 5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.25a.75.75 0 0 0-.75-.75zM8 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6m9.75 4a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5zM8 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m9.75-1a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="ffn23gb4g"/>`,
		"fallback": "fluent:contact-card-generic-24-regular",
	});
}

export default Component;
