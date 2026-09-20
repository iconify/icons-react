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
		"content": `<style>.fwub5xy9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.5 34.5v8h4");
}

.gks5cacew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.324 33.435A21.51 21.51 0 0 0 24 2.5A21.47 21.47 0 0 0 5.045 34.109l-.56 2.084l-1.928 7.202a1.673 1.673 0 0 0 2.049 2.048l7.2-1.928l2.074-.555a21.48 21.48 0 0 0 19.553.366M20.525 17.039l6.667 6.667l9.776-6.667l-6.667 9.776l-2.825 4.146l-6.667-6.667l-9.777 6.667l6.668-9.776Z");
}

.vi_nxfq0r {
  cx: 38.5px;
  cy: 38.5px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="gks5cacew"/><circle class="vi_nxfq0r"/><path class="fwub5xy9i"/>`,
		"fallback": "arcticons:facebook-messenger-lite",
	});
}

export default Component;
