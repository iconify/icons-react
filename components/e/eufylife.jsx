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
		"content": `<style>.emmggdcxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.523 2.535a4.125 4.125 0 0 0-3.204 6.73l6.615 7.764l6.55-7.687l.033-.037l.032-.04a4.129 4.129 0 1 0-6.615-4.924a4.12 4.12 0 0 0-3.407-1.806Z");
}

.mt-hg--9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24A21.5 21.5 0 1 1 24 2.5V24");
}
</style><path class="mt-hg--9x"/><path class="emmggdcxg"/>`,
		"fallback": "arcticons:eufylife",
	});
}

export default Component;
