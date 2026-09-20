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
		"content": `<style>.r6ka3wb4d {
  fill: currentColor;
  d: path("M5.161 10.073C4.454 9.265 5.028 8 6.102 8h11.796c1.074 0 1.648 1.265.941 2.073l-5.522 6.31a1.75 1.75 0 0 1-2.634 0zM6.653 9.5l5.159 5.896a.25.25 0 0 0 .376 0l5.16-5.896z");
}
</style><path class="r6ka3wb4d"/>`,
		"fallback": "fluent:caret-down-24-regular",
	});
}

export default Component;
