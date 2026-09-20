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
		"content": `<style>.q-jo4d_6e {
  fill: currentColor;
  d: path("M11.288 13.713Q11 13.425 11 13V6q0-.425.288-.712T12 5t.713.288T13 6v7q0 .425-.288.713T12 14t-.712-.288m0 5Q11 18.426 11 18t.288-.712T12 17t.713.288T13 18t-.288.713T12 19t-.712-.288");
}
</style><path class="q-jo4d_6e"/>`,
		"fallback": "material-symbols:exclamation-rounded",
	});
}

export default Component;
