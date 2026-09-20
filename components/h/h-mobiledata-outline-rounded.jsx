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
		"content": `<style>.qg9ol5b6o {
  fill: currentColor;
  d: path("M9 13v3q0 .425-.288.713T8 17t-.712-.288T7 16V8q0-.425.288-.712T8 7t.713.288T9 8v3h6V8q0-.425.288-.712T16 7t.713.288T17 8v8q0 .425-.288.713T16 17t-.712-.288T15 16v-3z");
}
</style><path class="qg9ol5b6o"/>`,
		"fallback": "material-symbols:h-mobiledata-outline-rounded",
	});
}

export default Component;
