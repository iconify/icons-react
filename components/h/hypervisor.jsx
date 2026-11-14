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
		"content": `<style>.i_n9zdbfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5h19v12h-19Zm2-6.5H11v6.5H4.5Zm-2 10.5h19m-19 4h19");
}
</style><path class="i_n9zdbfq"/>`,
		"fallback": "uix-sharp:hypervisor",
	});
}

export default Component;
