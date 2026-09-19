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
		"content": `<style>.uii7hhahu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.945 20.55a2.694 2.694 0 0 1 0 5.387H10.5V15.161h4.445a2.694 2.694 0 0 1 0 5.388m0 0H10.5m19.861 5.388V15.161L37.5 25.937V15.161m-17.153 0h7.139m-3.569 10.776V15.161M12.681 28.353H37.5l-27 4.486v-2.305c0-1.205.977-2.181 2.181-2.181");
}

.uo47pyvli {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4");
}
</style><path class="uo47pyvli"/><path class="uii7hhahu"/>`,
		"fallback": "arcticons:btn-mobile-banking",
	});
}

export default Component;
