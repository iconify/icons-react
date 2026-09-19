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
		"content": `<style>.c-3-ql74i {
  fill: none;
  stroke: currentColor;
  d: path("M14.5 5.5v37m19-37v37");
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.z6kz0pbfd {
  cx: 24px;
  cy: 24px;
  r: 13.9px;
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 7;
}
</style><path class="ll0g54h-q"/><circle class="z6kz0pbfd"/><path class="c-3-ql74i"/>`,
		"fallback": "arcticons:etherpad",
	});
}

export default Component;
