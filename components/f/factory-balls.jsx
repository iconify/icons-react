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
		"content": `<style>.a_faqrbxs {
  cx: 12.518px;
  cy: 19.877px;
  rx: 3.329px;
  ry: 3.482px;
}

.apk4myb6x {
  cx: 27.756px;
  cy: 16.136px;
  rx: 8.032px;
  ry: 8.108px;
}

.e-catjbcd {
  cx: 25.283px;
  cy: 19.969px;
  rx: 3.329px;
  ry: 3.482px;
}

.f_v_dfbgn {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
}

.nc8qa4b4o {
  cx: 11.143px;
  cy: 16.686px;
  rx: 6.261px;
  ry: 7.497px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="f_v_dfbgn"/><ellipse class="apk4myb6x"/><ellipse class="nc8qa4b4o"/><ellipse class="e-catjbcd"/><ellipse class="a_faqrbxs"/></g>`,
		"fallback": "arcticons:factory-balls",
	});
}

export default Component;
