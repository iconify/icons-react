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
		"content": `<style>.crmyoimsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.75h11.5v6H6.25zm1.75 6v3.5m8-3.5v3.5m-11.25 0h14.5v3.5H4.75zm2 3.5v5.5m10.5-5.5v5.5");
}
</style><path class="crmyoimsc"/>`,
		"fallback": "iconoven:chair-sharp",
	});
}

export default Component;
