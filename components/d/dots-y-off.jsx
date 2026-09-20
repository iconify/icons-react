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

.ehbqml5ic {
  cx: 10px;
  cy: 10px;
  r: 2px;
}

.lwivuzb_u {
  cx: 10px;
  cy: 15px;
  r: 2px;
}

.m_cyn06nd {
  cx: 10px;
  cy: 5px;
  r: 2px;
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><circle class="lwivuzb_u"/><circle class="ehbqml5ic"/><circle class="m_cyn06nd"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:dots-y-off",
	});
}

export default Component;
