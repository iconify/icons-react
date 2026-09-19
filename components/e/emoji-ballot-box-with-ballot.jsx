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
		"content": `<style>.pqb-16y1p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.31 42.5V22.018h9.258m13.707.001H41.69V42.5M24.868 25.949l-9.226-3.783L22.475 5.5l11.437 4.687L27.5 25.825m-13.135.177h19.284M41.69 42.5H6.31");
}
</style><path class="pqb-16y1p"/>`,
		"fallback": "arcticons:emoji-ballot-box-with-ballot",
	});
}

export default Component;
