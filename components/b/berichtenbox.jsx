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
		"content": `<style>.f710l3bib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.552 14.5L24 25.589L8.448 14.5m8.09 11.656L8 33.5m32 0l-8.538-7.344");
}

.jcb67ab5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.72 10.5h4.56v8.554h-4.56z");
}

.k1qs_h7jn {
  width: 39px;
  height: 27px;
  x: 4.5px;
  y: 10.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="jcb67ab5u"/><path class="f710l3bib"/><rect class="k1qs_h7jn"/>`,
		"fallback": "arcticons:berichtenbox",
	});
}

export default Component;
