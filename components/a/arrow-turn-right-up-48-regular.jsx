import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o9-apbb3u {
  fill: currentColor;
  d: path("M7.25 35.5a1.25 1.25 0 1 0 0 2.5h18.5A7.25 7.25 0 0 0 33 30.75V12.582l6.854 7.04a1.25 1.25 0 0 0 1.792-1.744l-9.25-9.5a1.25 1.25 0 0 0-1.792 0l-9.25 9.5a1.25 1.25 0 0 0 1.792 1.744l7.354-7.553V30.75a4.75 4.75 0 0 1-4.75 4.75z");
}
</style><path class="o9-apbb3u"/>`,
		"fallback": "fluent:arrow-turn-right-up-48-regular",
	});
}

export default Component;
