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
		"content": `<style>.i8izzacgl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5v6h4.819l20.73 28.412c.948 1.31 2.457 2.588 5.1 2.588h6.35v-6h-5.651c-1.165 0-1.903-.817-2.971-2.309L28.933 27H42.5v-6H24.593l-6.869-9.5H42.5v-6z");
}
</style><path class="i8izzacgl"/>`,
		"fallback": "arcticons:chartr",
	});
}

export default Component;
