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
		"content": `<style>.b6-3sgc-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.102 19.651s1.238.207 1.864.249c.62.041 1.863 0 1.863 0m-3.727 3.479a12 12 0 0 0 1.242.248a12 12 0 0 0 1.243 0m7.455-1.491s-1.239.207-1.864.249c-.62.04-1.864 0-1.864 0m3.728 2.236a12 12 0 0 1-1.243.248a12 12 0 0 1-1.242 0m1.243 7.207a12 12 0 0 1-1.243.248a12 12 0 0 1-1.243 0m-3.727 4.721a12 12 0 0 0 1.242.249a12 12 0 0 0 1.243 0m3.901-23.32s5.86-6.175 3.553-7.99c-1.363-1.253-4.97 2.486-4.97 2.486s-.632-4.97-2.484-4.97s-2.485 4.97-2.485 4.97s-3.636-3.77-4.97-2.485c-2.45 2.361 3.554 7.99 3.554 7.99");
}

.mprj_rbvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.072 44.5s-12.424-32.303 0-32.303s0 32.303 0 32.303");
}
</style><path class="mprj_rbvu"/><path class="b6-3sgc-z"/>`,
		"fallback": "arcticons:gruenzeit",
	});
}

export default Component;
