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
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.wgih9pc1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.359 23.013h-3.692a.82.82 0 0 1-.82-.82V18.5h-7.385a.82.82 0 0 0-.82.82v14.36c0 .453.367.82.82.82h11.077a.82.82 0 0 0 .82-.82zM25.846 18.5l4.513 4.513");
}
</style><path class="h0qgeuwow"/><path class="wgih9pc1t"/>`,
		"fallback": "arcticons:folder-documents",
	});
}

export default Component;
