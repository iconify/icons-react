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
		"content": `<style>.z4vg49z0r {
  fill: currentColor;
  d: path("M7 20v-2H6q-.425 0-.712-.288T5 17t.288-.712T6 16h1V4q0-.425.288-.712T8 3h9q.425 0 .713.288T18 4t-.288.713T17 5H9v6h7q.425 0 .713.288T17 12t-.288.713T16 13H9v3h3q.425 0 .713.288T13 17t-.288.713T12 18H9v2q0 .425-.288.713T8 21t-.712-.288T7 20");
}
</style><path class="z4vg49z0r"/>`,
		"fallback": "material-symbols:currency-franc-rounded",
	});
}

export default Component;
