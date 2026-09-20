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
		"content": `<style>.lk0bg3ohx {
  fill: currentColor;
  d: path("M8 20V4h10v5h1q1.25 0 2.125.875T22 12v8zm-3.5 1q1.05 0 1.775-.725T7 18.5v-8q0-1.05-.725-1.775T4.5 8t-1.775.725T2 10.5v8q0 1.05.725 1.775T4.5 21M10 9h6V6h-6zm6.713 4.713Q17 13.425 17 13t-.288-.712T16 12t-.712.288T15 13t.288.713T16 14t.713-.288m3 0Q20 13.426 20 13t-.288-.712T19 12t-.712.288T18 13t.288.713T19 14t.713-.288m-3 3Q17 16.426 17 16t-.288-.712T16 15t-.712.288T15 16t.288.713T16 17t.713-.288m3 0Q20 16.426 20 16t-.288-.712T19 15t-.712.288T18 16t.288.713T19 17t.713-.288M10 17h4v-5h-4z");
}
</style><path class="lk0bg3ohx"/>`,
		"fallback": "material-symbols:fax",
	});
}

export default Component;
