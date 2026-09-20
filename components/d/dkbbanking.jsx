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
		"content": `<style>.p1um_wbqu {
  width: 37px;
  height: 37px;
  x: 5.501px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.wpvqw_yce {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.699 29.543V18.424m.001 0h4.68a2.788 2.788 0 1 1 0 5.576H29.7m0 0h4.68a2.788 2.788 0 1 1 0 5.576H29.7m-18.868 0V18.424h1.893a5.576 5.576 0 1 1 0 11.152zm10.388-11.16v11.152m1.442-5.576l4.118-5.539m-4.118 5.539l4.118 5.592m-4.118-5.592H21.22");
}
</style><path class="wpvqw_yce"/><rect class="p1um_wbqu"/>`,
		"fallback": "arcticons:dkbbanking",
	});
}

export default Component;
