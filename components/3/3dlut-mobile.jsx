import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c11gmxb1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.882 19.382v9.236H34.5m-13.137 0v-9.236h2.078a4.04 4.04 0 0 1 4.04 4.04v1.155a4.04 4.04 0 0 1-4.04 4.041zm-7.862-.779c.638.534 1.326.779 2.872.779h.36a2.31 2.31 0 0 0 2.308-2.308h0A2.31 2.31 0 0 0 16.734 24M13.5 20.154c.639-.533 1.328-.776 2.874-.772l.36.002a2.31 2.31 0 0 1 2.307 2.309h0A2.31 2.31 0 0 1 16.734 24m-1.775.001h1.774");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="cpk0fnbgt"/><path class="c11gmxb1c"/>`,
		"fallback": "arcticons:3dlut-mobile",
	});
}

export default Component;
