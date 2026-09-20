import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g24lh5-ow {
  fill: currentColor;
  d: path("M6.5 3A4.5 4.5 0 0 0 2 7.5v12A4.5 4.5 0 0 0 6.5 24H8v4.081c0 1.706 2 2.629 3.298 1.522L17.868 24H25.5a4.5 4.5 0 0 0 4.5-4.5v-12A4.5 4.5 0 0 0 25.5 3z");
}
</style><path class="g24lh5-ow"/>`,
		"fallback": "fluent:comment-32-filled",
	});
}

export default Component;
