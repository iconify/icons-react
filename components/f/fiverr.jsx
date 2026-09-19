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
		"content": `<style>.mysrbpbjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.709 4.5h-7.474c-5.447 0-10.198 4.294-9.88 12.076H7.99v7.245h5.724V43.5h8.498V23.821h8.856V43.5h8.944V16.576H22.748v-1.879a2.805 2.805 0 0 1 2.848-2.951h5.113Z");
}
</style><path class="mysrbpbjw"/>`,
		"fallback": "arcticons:fiverr",
	});
}

export default Component;
