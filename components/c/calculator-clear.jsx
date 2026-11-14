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
		"content": `<style>.jvmeqobay {
  d: path("M12.1 21H3.5V2.5h14v11.1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uw7m5l0-j {
  d: path("M6.5 5.5h8V9h-8Zm1 8h.01m3.49 0h.01m-3.51 4h.01m7.99-2l5 5m0-5l-5 5");
}
</style><g class="ulnmmdpxh"><path class="jvmeqobay"/><path class="uw7m5l0-j"/></g>`,
		"fallback": "uix-sharp:calculator-clear",
	});
}

export default Component;
