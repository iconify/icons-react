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
		"content": `<style>.a2hmc2mea {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.85px;
  ry: 16.337px;
}

.d0exevcyq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.338 24v20.14");
}

.nofj9bctb {
  cx: 24px;
  cy: 24px;
  r: 16.337px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s5g5uachw {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 16.337px;
  ry: 6.85px;
}

.umrgg09or {
  cx: 24px;
  cy: 24px;
  r: 2.868px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vkr_0ncwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.183 40.985A21.5 21.5 0 1 1 45.5 24v18.44");
}
</style><circle class="nofj9bctb"/><ellipse class="a2hmc2mea"/><ellipse transform="rotate(-30 24 24)" class="s5g5uachw"/><ellipse transform="rotate(-60 24 24)" class="a2hmc2mea"/><path class="d0exevcyq"/><circle class="umrgg09or"/><path class="vkr_0ncwz"/>`,
		"fallback": "arcticons:atom",
	});
}

export default Component;
