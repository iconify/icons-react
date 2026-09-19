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

.gjk92brao {
  cx: 24px;
  cy: 23.99px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.11px;
  ry: 21.48px;
}
</style><circle class="cpk0fnbgt"/><ellipse transform="rotate(-45 24 23.999)" class="gjk92brao"/>`,
		"fallback": "arcticons:ariane",
	});
}

export default Component;
