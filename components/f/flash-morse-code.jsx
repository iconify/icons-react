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
		"content": `<style>.elmf8_b8e {
  cx: 16.2px;
  cy: 8.4px;
  r: 3.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h7cirdbaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.2 20.1a3.9 3.9 0 0 1 3.9 3.9v15.6a3.9 3.9 0 0 1-3.9 3.9h0a3.9 3.9 0 0 1-3.9-3.9V24a3.9 3.9 0 0 1 3.9-3.9");
}

.i58ae2blo {
  cx: 31.8px;
  cy: 8.4px;
  r: 3.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i5rdw2b1f {
  cx: 31.8px;
  cy: 24px;
  r: 3.9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="h7cirdbaa"/><circle class="elmf8_b8e"/><circle class="i58ae2blo"/><circle class="i5rdw2b1f"/>`,
		"fallback": "arcticons:flash-morse-code",
	});
}

export default Component;
