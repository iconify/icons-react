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
		"content": `<style>.ucy1exbel {
  fill: currentColor;
  d: path("M4.954 18h12.435l2.403-12h-5.967zM3 19L13.289 5h7.73l-2.807 14zm11.289-5.616q.799 0 1.351-.544t.552-1.333t-.552-1.34t-1.351-.552q-.784 0-1.325.549t-.541 1.342t.541 1.336t1.325.542M4.954 18h12.435z");
}
</style><path class="ucy1exbel"/>`,
		"fallback": "material-symbols-light:airlines-outline-sharp",
	});
}

export default Component;
