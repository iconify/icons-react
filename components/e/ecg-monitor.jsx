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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrc6s-u3a {
  d: path("M6 3.5h12A3.5 3.5 0 0 1 21.5 7v6.5A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5V7A3.5 3.5 0 0 1 6 3.5m2 17h8M12 17v3.5");
}
</style><g class="hntgybcog"><path class="nrc6s-u3a"/><path class="bets1-kie"/></g>`,
		"fallback": "uix:ecg-monitor",
	});
}

export default Component;
