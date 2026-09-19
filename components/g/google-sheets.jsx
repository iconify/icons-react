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
		"content": `<style>.pocelwxsf {
  width: 35.455px;
  height: 28.364px;
  x: 8.046px;
  y: 9.818px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.432px;
  ry: 4.432px;
}

.r40ase1ra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.212 34.953A5.67 5.67 0 0 1 4.5 29.628V18.372a5.67 5.67 0 0 1 3.712-5.325M20.455 29.54h18.613m-4.432 4.21V19.568");
}
</style><rect class="pocelwxsf"/><path class="r40ase1ra"/>`,
		"fallback": "arcticons:google-sheets",
	});
}

export default Component;
