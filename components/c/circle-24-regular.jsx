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
		"content": `<style>.fmjgekb1o {
  fill: currentColor;
  d: path("M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12");
}
</style><path class="fmjgekb1o"/>`,
		"fallback": "fluent:circle-24-regular",
	});
}

export default Component;
