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
		"content": `<style>.erjtg98fm {
  fill: currentColor;
  d: path("M3 20V4q0-.425.288-.712T4 3t.713.288T5 4v16q0 .425-.288.713T4 21t-.712-.288T3 20m16 0V4q0-.425.288-.712T20 3t.713.288T21 4v16q0 .425-.288.713T20 21t-.712-.288T19 20m-7.712-7.287Q11 12.425 11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13t-.712-.288m-4 0Q7 12.426 7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13t-.712-.288m8 0Q15 12.426 15 12t.288-.712T16 11t.713.288T17 12t-.288.713T16 13t-.712-.288");
}
</style><path class="erjtg98fm"/>`,
		"fallback": "material-symbols:fit-width-rounded",
	});
}

export default Component;
