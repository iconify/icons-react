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

.p9rvr-ggk {
  cx: 10px;
  cy: 14.5px;
  r: 1.5px;
}

.qufharbmm {
  cx: 10px;
  cy: 5.5px;
  r: 1.5px;
}

.xxiie10rz {
  d: path("M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z");
}
</style><g class="cuyn6tgcc"><path class="xxiie10rz"/><circle class="qufharbmm"/><circle class="p9rvr-ggk"/></g>`,
		"fallback": "pepicons-pop:division",
	});
}

export default Component;
