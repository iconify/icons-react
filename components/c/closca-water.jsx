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
		"content": `<style>.jdg0jlbes {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
}

.zlr7jzbzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.381 29.92C1.234 15.895 21.467 2.396 32.214 19.6c-7.811 5.43-16.369 9.098-25.833 10.32m10.999.508s14.842.391 21.321.113c6.045-.26 5.42-11.396-1.494-9.984c-.777.159-1.489.587-2.148 1.034c-10.503 7.13-12.441 6.875-17.679 8.837");
}
</style><circle class="jdg0jlbes"/><path class="zlr7jzbzx"/>`,
		"fallback": "arcticons:closca-water",
	});
}

export default Component;
