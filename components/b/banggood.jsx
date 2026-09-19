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
		"content": `<style>.m855g-buj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.558 26.723s4.053 3.01 9.442 3.01s9.442-3.01 9.442-3.01M5.5 19.466c4.72.392 11.493.822 18.5.822s13.78-.43 18.5-.822M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}
</style><path class="m855g-buj"/>`,
		"fallback": "arcticons:banggood",
	});
}

export default Component;
