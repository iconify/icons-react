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
		"content": `<style>.a7527_b7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.788 42.5H13.677a4.45 4.45 0 0 1-4.465-4.457V9.957A4.45 4.45 0 0 1 13.677 5.5h25.111z");
}

.i-io8wpwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.788 33.235H13.677a4.45 4.45 0 0 0-4.465 4.457");
}
</style><path class="a7527_b7s"/><path class="i-io8wpwq"/>`,
		"fallback": "arcticons:book-alt",
	});
}

export default Component;
