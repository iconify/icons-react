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

.yeuuv9bwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14 21.438l1.768-1.812c.976-1 .976-2.622 0-3.623c-.977-1-2.56-1-3.536 0a2.607 2.607 0 0 0 0 3.623l8.536 8.747a2.61 2.61 0 0 1 0 3.624c-.977 1-2.56 1-3.536 0a2.607 2.607 0 0 1 0-3.623l8.536-8.747a2.61 2.61 0 0 0 0-3.624c-.977-1-2.56-1-3.536 0a2.607 2.607 0 0 0 0 3.623l8.536 8.747a2.61 2.61 0 0 1 0 3.624c-.977 1-2.56 1-3.536 0a2.607 2.607 0 0 1 0-3.623l8.536-8.747a2.61 2.61 0 0 0 0-3.624c-.977-1-2.56-1-3.536 0a2.607 2.607 0 0 0 0 3.623L34 21.439");
}
</style><circle class="cpk0fnbgt"/><path class="yeuuv9bwe"/>`,
		"fallback": "arcticons:bankwest",
	});
}

export default Component;
