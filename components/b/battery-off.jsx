import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}

.xwhj4xbwf {
  width: 2px;
  height: 5px;
  x: 17px;
  y: 7.5px;
  rx: 0.5px;
}

.yhxyf4f2m {
  fill-rule: evenodd;
  d: path("M14 4.5H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-11 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z");
}

.yyulwlb7u {
  d: path("M4 7.5h3v5H4zm3.5 0h3v5h-3zm3.5 0h3v5h-3z");
}
</style><g class="cuyn6tgcc"><rect class="xwhj4xbwf"/><path class="yyulwlb7u"/><path clip-rule="evenodd" class="yhxyf4f2m"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:battery-off",
	});
}

export default Component;
