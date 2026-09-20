import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rw4ny127j {
  fill: currentColor;
  d: path("M14.925 22L10.7 17.75l1.4-1.425l2.825 2.825L20.6 13.5l1.4 1.425zM4 20v-9.375L2.2 12l-1.175-1.575L12 2l11 8.4l-1.2 1.6l-1.475-1.1l-5.4 5.425L12.1 13.5l-4.275 4.3L10 20z");
}
</style><path class="rw4ny127j"/>`,
		"fallback": "material-symbols:in-home-mode-sharp",
	});
}

export default Component;
