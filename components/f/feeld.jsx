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
		"content": `<style>.bs2rlsbfn {
  width: 14px;
  height: 37px;
  x: 13.632px;
  y: 2.172px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7px;
}

.ojrn9nbam {
  width: 14px;
  height: 37px;
  x: 17px;
  y: -6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7px;
}

.wv99g7doe {
  width: 14px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7px;
}
</style><rect class="wv99g7doe"/><rect transform="rotate(-90 24 12.5)" class="ojrn9nbam"/><rect transform="rotate(-45 20.632 20.672)" class="bs2rlsbfn"/>`,
		"fallback": "arcticons:feeld",
	});
}

export default Component;
