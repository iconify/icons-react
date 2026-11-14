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
		"content": `<style>.f7xa07bah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 20H3V3h17v9.2M11.5 2v20m6.5-7v6m-3-3h6");
}
</style><path class="f7xa07bah"/>`,
		"fallback": "uix-sharp:guide-add",
	});
}

export default Component;
