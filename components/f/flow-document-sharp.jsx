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
		"content": `<style>.o-9cl_z6v {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 17L2 5L22 5L22 17C20.6519 15.7161 18.8616 15 17 15C15.1384 15 13.3481 15.7161 12 17C10.6519 18.2839 8.8616 19 7 19C5.1384 19 3.3481 18.2839 2 17Z");
}
</style><path class="o-9cl_z6v"/>`,
		"fallback": "keyline-icons:flow-document-sharp",
	});
}

export default Component;
