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
		"content": `<style>.lkofhbr6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 19H2V5h20v10.2M2 9.5h20M18 15v6m-3-3h6");
}
</style><path class="lkofhbr6c"/>`,
		"fallback": "uix-sharp:emergency-credit",
	});
}

export default Component;
