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
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.iqq0q6b0c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.498 31.62v-3.372v.005c-5.849 0-8.524 4.115-8.498 4.127c.473-1.98 1.589-8.245 8.498-8.245V20.62L31 26.12zM31 26.12l-1.985-1.985");
}
</style><path class="h0qgeuwow"/><path class="iqq0q6b0c"/>`,
		"fallback": "arcticons:folder-shortcut",
	});
}

export default Component;
