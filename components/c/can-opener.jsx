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
		"content": `<style>.dugudl60m {
  width: 12px;
  height: 9.5px;
  x: 3.75px;
  y: 11.75px;
  rx: 2px;
}

.eepn13ewi {
  d: path("M3.75 14.5h12m-1.48-5.88l-.54-.59q-.58-.63.05-1.2l2.24-2.06q.63-.57 1.21.06l.54.59q.58.63-.05 1.2l-2.24 2.06q-.63.57-1.21-.06");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ymg6v-bdt {
  cx: 12.5px;
  cy: 9.75px;
  r: 2.25px;
}
</style><g class="hntgybcog"><rect class="dugudl60m"/><path class="eepn13ewi"/><circle class="ymg6v-bdt"/></g>`,
		"fallback": "iconoven:can-opener",
	});
}

export default Component;
