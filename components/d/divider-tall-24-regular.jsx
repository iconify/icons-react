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
		"content": `<style>.t8c_5d7bh {
  fill: currentColor;
  d: path("M11.25 2.75v18.5a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0");
}
</style><path class="t8c_5d7bh"/>`,
		"fallback": "fluent:divider-tall-24-regular",
	});
}

export default Component;
