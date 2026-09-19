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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.iw3keccqh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.46 24.998a4.959 4.959 0 1 1-2.567 9.58L16.99 32.46l5.133-19.159l7.903 2.118a4.959 4.959 0 1 1-2.566 9.58m0-.001l-7.903-2.117m2.566-9.58l-2.807-.752M16.99 32.46l-2.808-.752M24.56 13.954l.91-3.397m3 4.445l.91-3.397M18.516 36.51l.91-3.397m3 4.444l.91-3.396");
}
</style><path class="iw3keccqh"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:bitcoin",
	});
}

export default Component;
