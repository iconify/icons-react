import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gxnj-lzsk {
  fill: currentColor;
  d: path("m237.66 101.66l-96 96a8 8 0 0 1-11.32 0L32 99.31V152a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H43.31L136 180.69l90.34-90.35a8 8 0 0 1 11.32 11.32");
}
</style><path class="gxnj-lzsk"/>`,
		"fallback": "ph:arrow-elbow-left",
	});
}

export default Component;
