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
		"content": `<style>.r878bubte {
  fill: currentColor;
  d: path("M11.288 12.713Q11 12.425 11 12V5.825L7.1 9.7q-.275.275-.687.288T5.7 9.7q-.275-.275-.275-.7t.275-.7l5.6-5.6q.15-.15.325-.212T12 2.425t.375.063t.325.212l5.6 5.6q.275.275.275.688T18.3 9.7q-.3.3-.712.3t-.713-.3L13 5.825V12q0 .425-.288.713T12 13t-.712-.288m0 5Q11 17.426 11 17v-1q0-.425.288-.712T12 15t.713.288T13 16v1q0 .425-.288.713T12 18t-.712-.288m0 4Q11 21.426 11 21t.288-.712T12 20t.713.288T13 21t-.288.713T12 22t-.712-.288");
}
</style><path class="r878bubte"/>`,
		"fallback": "material-symbols:arrow-warm-up-outline-rounded",
	});
}

export default Component;
