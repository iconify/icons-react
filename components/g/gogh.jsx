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
		"content": `<style>.aet2ltd-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.83 23.172c0-1.407 1.13-2.547 2.523-2.547s2.522 1.14 2.522 2.547v4.202M32.83 17.188v10.186m-2.536-6.748v7.64c0 1.407-1.13 2.547-2.523 2.547a2.5 2.5 0 0 1-1.784-.746");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dr9598bet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.158 20.626v7.64c0 1.407-1.13 2.547-2.523 2.547a2.5 2.5 0 0 1-1.784-.746");
}

.ut3eoachj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.249 23.172c0-1.407 1.13-2.547 2.523-2.547s2.522 1.14 2.522 2.547v1.655c0 1.407-1.13 2.547-2.522 2.547c-1.394 0-2.523-1.14-2.523-2.547zm-7.556 0c0-1.407 1.13-2.547 2.523-2.547s2.522 1.14 2.522 2.547v1.655c0 1.407-1.13 2.547-2.522 2.547c-1.394 0-2.523-1.14-2.523-2.547zm-7.556 0c0-1.407 1.13-2.547 2.523-2.547s2.522 1.14 2.522 2.547v1.655c0 1.407-1.13 2.547-2.522 2.547c-1.394 0-2.523-1.14-2.523-2.547z");
}
</style><circle class="cpk0fnbgt"/><path class="aet2ltd-g"/><path class="ut3eoachj"/><path class="dr9598bet"/>`,
		"fallback": "arcticons:gogh",
	});
}

export default Component;
