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
		"content": `<style>.udgn5xt4c {
  fill: currentColor;
  d: path("M9.288 19.713Q9 19.425 9 19v-5q-2.075 0-3.537-1.463T4 9t1.463-3.537T9 4h8q.425 0 .713.288T18 5t-.288.713T17 6h-1v13q0 .425-.288.713T15 20t-.712-.288T14 19V6h-3v13q0 .425-.288.713T10 20t-.712-.288");
}
</style><path class="udgn5xt4c"/>`,
		"fallback": "material-symbols:format-paragraph-rounded",
	});
}

export default Component;
