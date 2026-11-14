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
		"content": `<style>.schd6wbtd {
  d: path("m18 14l.695.61l.921-.085l.204.902l.795.473l-.365.85l.365.85l-.795.473l-.204.902l-.921-.085l-.695.61l-.695-.61l-.921.085l-.204-.902l-.795-.473l.365-.85l-.365-.85l.795-.473l.204-.902l.921.085Zm-1.25 5.25l-.5 2.5m3-2.5l.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xm0axih8f {
  d: path("M12 18.5H2.5v-13h19v6M6 9.5h5.5m-5.5 5h3.5");
}
</style><g class="ulnmmdpxh"><path class="xm0axih8f"/><path class="schd6wbtd"/></g>`,
		"fallback": "uix-sharp:cheque-certified",
	});
}

export default Component;
