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
		"content": `<style>.kb_wt-bif {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.295 6.189A3.786 3.786 0 0 0 5.5 9.983v21.82A3.786 3.786 0 0 0 9.295 35.6H14.5l1.054 6.213l5.567-6.213h17.584a3.786 3.786 0 0 0 3.795-3.795V9.984a3.786 3.786 0 0 0-3.795-3.795z");
}

.vn9q-o57t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 13.904a4.524 4.524 0 0 0-3.676 7.16l-1.562 4.864h10.476l-1.562-4.864A4.523 4.523 0 0 0 24 13.904");
}
</style><path class="kb_wt-bif"/><path class="vn9q-o57t"/>`,
		"fallback": "arcticons:dressecurecomms",
	});
}

export default Component;
