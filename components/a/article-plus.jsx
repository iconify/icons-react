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
		"content": `<style>.et17l_snw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 20H3V2h14v10.2M6.5 6.5h7m-7 4h7m-7 4H10m8 .5v6m-3-3h6");
}
</style><path class="et17l_snw"/>`,
		"fallback": "uix-sharp:article-plus",
	});
}

export default Component;
