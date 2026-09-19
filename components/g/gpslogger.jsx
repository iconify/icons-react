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
		"content": `<style>.a-_t87bab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.04 5.51l-.8-3m10.72 40l.8 2.98M42.5 19.05l3-.81m-40 10.72l-3 .81");
}

.kzbvcpbzi {
  cx: 24px;
  cy: 24.01px;
  r: 19.15px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="kzbvcpbzi"/><path class="a-_t87bab"/>`,
		"fallback": "arcticons:gpslogger",
	});
}

export default Component;
