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

.kum348bkw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.378 20.037v8.972A2.99 2.99 0 0 1 17.388 32h0a2.98 2.98 0 0 1-2.115-.876");
}

.wz7xqzbyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.543 16v10.467c0 .826.67 1.496 1.495 1.496h.449m2.135-4.935a2.99 2.99 0 1 1 5.981 0v1.944a2.99 2.99 0 1 1-5.981 0z");
}

.xdem-_bzz {
  width: 5.981px;
  height: 7.925px;
  x: 14.397px;
  y: 20.037px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.991px;
  ry: 2.991px;
}
</style><path class="kum348bkw"/><rect transform="matrix(-1 0 0 -1 34.775 48)" class="xdem-_bzz"/><path class="wz7xqzbyc"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:glo-cafe",
	});
}

export default Component;
