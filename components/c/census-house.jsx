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
		"content": `<style>.jmx87hbob {
  d: path("M15 14.5h6.5V22H15Zm1.75 0V13h3v1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vff5nb5ie {
  d: path("M12.172 20.5H2.5v-10L11 3l8.146 7.188");
}
</style><g class="ulnmmdpxh"><path class="vff5nb5ie"/><path class="jmx87hbob"/></g>`,
		"fallback": "uix-sharp:census-house",
	});
}

export default Component;
