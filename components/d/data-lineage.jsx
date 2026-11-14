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
		"content": `<style>.bbphkwbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h5v5h-5Zm14-6h5v5h-5Zm0 12h5v5h-5Zm-9-3.5H12V6h4.5M12 12v6h4.5");
}
</style><path class="bbphkwbdr"/>`,
		"fallback": "uix-sharp:data-lineage",
	});
}

export default Component;
