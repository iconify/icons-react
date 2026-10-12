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
		"content": `<style>.vhjqqd1vo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.25h18.5v10H2.75zM7.5 17h9m-9-5.75V6H10v1.25v-3.5h2.5V5V3H15v2.5v-1.25h2.5v7Zm2.5-4v4M12.5 5v6.25M15 5.5v5.75");
}
</style><path class="vhjqqd1vo"/>`,
		"fallback": "iconoven:gloves-med-sharp",
	});
}

export default Component;
