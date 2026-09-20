import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wzarxi-aj {
  fill: currentColor;
  d: path("M17.999 9.136c-.01.498-.44.864-.937.864H11a1 1 0 0 1-1-1V2.938c0-.498.366-.927.864-.937L11 2a7 7 0 0 1 6.999 7.136M11 3v6h6a6 6 0 0 0-6-6M9 4.519a.5.5 0 0 0-.538-.499a7 7 0 1 0 7.518 7.518a.5.5 0 0 0-.499-.538H10.5A1.5 1.5 0 0 1 9 9.5zM3 11a6 6 0 0 1 5-5.917V9.5a2.5 2.5 0 0 0 2.5 2.5h4.417A6.002 6.002 0 0 1 3 11");
}
</style><path class="wzarxi-aj"/>`,
		"fallback": "fluent:data-pie-20-regular",
	});
}

export default Component;
