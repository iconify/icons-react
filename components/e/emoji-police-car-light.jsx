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
		"content": `<style>.e_cwjcboc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.65 9.24l5.525 5.377m7.776-2.41L24 4.5m7.826 10.127l5.523-5.377m-13.398 2.958L24 4.5m1.303 15.484c.979-.656 2.507-.088 3.418 1.274c.92 1.361.862 2.987-.108 3.653c-.98.656-2.507.078-3.428-1.273c-.91-1.362-.862-2.997.118-3.654");
}

.p63cjk_zx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.62 37.051c2.282-28.246 22.8-28.344 24.76 0m-27.972 0h31.184v6.239H8.408z");
}
</style><path class="e_cwjcboc"/><path class="p63cjk_zx"/>`,
		"fallback": "arcticons:emoji-police-car-light",
	});
}

export default Component;
