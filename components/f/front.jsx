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
		"content": `<style>.goc-kfbyz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.224 5.5H5.5v35.724h12.299V17.799h23.425z");
}

.ha8mnqrjt {
  cx: 31.251px;
  cy: 31.251px;
  r: 11.249px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="goc-kfbyz"/><circle transform="rotate(-22.5 31.251 31.251)" class="ha8mnqrjt"/>`,
		"fallback": "arcticons:front",
	});
}

export default Component;
