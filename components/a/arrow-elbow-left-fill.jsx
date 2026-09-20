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
		"content": `<style>.pfcfmn5ap {
  fill: currentColor;
  d: path("m237.66 101.66l-96 96a8 8 0 0 1-11.32 0L60 127.31l-30.34 30.35A8 8 0 0 1 16 152V80a8 8 0 0 1 8-8h72a8 8 0 0 1 5.66 13.66L71.31 116L136 180.69l90.34-90.35a8 8 0 0 1 11.32 11.32");
}
</style><path class="pfcfmn5ap"/>`,
		"fallback": "ph:arrow-elbow-left-fill",
	});
}

export default Component;
