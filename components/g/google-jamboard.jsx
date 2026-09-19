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
		"content": `<style>.hafxviwoh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37 30.5a13 13 0 1 1-13-13");
}

.r9_u-nf6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5h13v26H24zm0 13h13");
}
</style><path class="hafxviwoh"/><path class="r9_u-nf6q"/>`,
		"fallback": "arcticons:google-jamboard",
	});
}

export default Component;
