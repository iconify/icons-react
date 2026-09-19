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
		"content": `<style>.f9y3f6b3x {
  width: 29px;
  height: 21px;
  x: 9.5px;
  y: 13.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 7px;
  ry: 7px;
}

.fmgruevhv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.114 5.5h11.773v37H18.114z");
}

.jb5wf92sp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.114 20.636h11.772v7.569H18.114z");
}

.jpz-7mbnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.705 20.636h28.59v7.569H9.705z");
}

.kh86-7byv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 20.636h37v7.568h-37z");
}
</style><rect class="f9y3f6b3x"/><path class="kh86-7byv"/><path class="fmgruevhv"/><path class="jpz-7mbnf"/><path class="jb5wf92sp"/>`,
		"fallback": "arcticons:9-patch-editor",
	});
}

export default Component;
