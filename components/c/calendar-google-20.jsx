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
		"content": `<style>.p3c-axb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.692 25.5c0 1.667 1.334 3 3 3s2.89-1.333 2.89-3v-3c0-1.667-1.334-3-2.89-3s-3 1.333-3 3zm-7.273-3c0-1.667 1.333-3 2.889-3s3 1.333 3 3c0 .778-.334 1.556-.89 2.111c-1.221 1-5 3.889-5 3.889h5.89");
}

.uph4zqc9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h24l9-9v-24a4 4 0 0 0-4-4m-5 0v37m-19-28v28m28-9h-37m37-19h-28");
}
</style><path class="p3c-axb7s"/><path class="uph4zqc9i"/>`,
		"fallback": "arcticons:calendar-google-20",
	});
}

export default Component;
