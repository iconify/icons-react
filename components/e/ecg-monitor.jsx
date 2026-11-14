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
		"content": `<style>.bets1-kie {
  d: path("M5.5 10.5h3l1.5-3l2.5 6L14 10l1 .5h3.5");
}

.hjy6w8bvm {
  d: path("M2.5 3.5h19V17h-19Zm5.5 17h8M12 17v3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hjy6w8bvm"/><path class="bets1-kie"/></g>`,
		"fallback": "uix-sharp:ecg-monitor",
	});
}

export default Component;
