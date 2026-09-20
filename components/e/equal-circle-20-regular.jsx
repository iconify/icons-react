import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tai632byr {
  fill: currentColor;
  d: path("M13.5 9a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1zm0 3a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1zm4.5-2a8 8 0 1 0-16 0a8 8 0 0 0 16 0m-8-7a7 7 0 1 1 0 14a7 7 0 0 1 0-14");
}
</style><path class="tai632byr"/>`,
		"fallback": "fluent:equal-circle-20-regular",
	});
}

export default Component;
