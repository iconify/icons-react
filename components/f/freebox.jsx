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

.s57tgrzei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.904 22.516V11.307h-3.828m8.02 0H37v11.209H26.096M37 16.912h-6.544M11 25.484h10.904v11.209H11m15.096-11.209H37v11.209m-15.096-5.605H15.36");
}
</style><rect class="p1um_wbqu"/><path class="s57tgrzei"/>`,
		"fallback": "arcticons:freebox",
	});
}

export default Component;
