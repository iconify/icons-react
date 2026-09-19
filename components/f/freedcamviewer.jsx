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
		"content": `<style>.mfd4lndmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.435 7.565v9.869H3.566V7.565z");
}

.tedeb43cf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 17.435V37.5a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2v-27a2 2 0 0 0-2-2H13.435");
}

.uz4iqrbqv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.777 35.307l6.275-12.736l5.785 9.047l9.045-15.581l9.341 19.27zm12.06-3.689l-2.135 3.689M8.5 5.52l6.978 6.98L8.5 19.477l-6.978-6.979z");
}
</style><path class="tedeb43cf"/><path class="uz4iqrbqv"/><path class="mfd4lndmq"/>`,
		"fallback": "arcticons:freedcamviewer",
	});
}

export default Component;
