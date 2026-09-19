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
		"content": `<style>.qgrpusb1k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.851 20.96q.005-.13.005-.262a7 7 0 1 0-13.352 2.944m6.352-13.408v-3m-7.399 6.064l-2.121-2.121m-.943 9.52h-3m20.862-7.399l2.121-2.121m.943 9.52h3");
}

.qn2gxrb-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 22.766a7.46 7.46 0 0 0-3.754 1.014a10.478 10.478 0 0 0-16.492 0a7.5 7.5 0 1 0 0 12.973a10.478 10.478 0 0 0 16.492 0A7.498 7.498 0 1 0 36 22.766");
}
</style><path class="qn2gxrb-s"/><path class="qgrpusb1k"/>`,
		"fallback": "arcticons:clima",
	});
}

export default Component;
