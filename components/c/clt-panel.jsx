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
		"content": `<style>.wb607hu0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v16h-19Zm0 5.5h19m-19 5h19M8.75 4v5.5m6.5-5.5v5.5m-3.25 5V20");
}
</style><path class="wb607hu0u"/>`,
		"fallback": "uix-sharp:clt-panel",
	});
}

export default Component;
