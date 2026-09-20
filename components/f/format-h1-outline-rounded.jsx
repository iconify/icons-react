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
		"content": `<style>.kjo4aac_r {
  fill: currentColor;
  d: path("M5.288 16.713Q5 16.425 5 16V8q0-.425.288-.712T6 7t.713.288T7 8v3h4V8q0-.425.288-.712T12 7t.713.288T13 8v8q0 .425-.288.713T12 17t-.712-.288T11 16v-3H7v3q0 .425-.288.713T6 17t-.712-.288m12 0Q17 16.426 17 16V9h-1q-.425 0-.712-.288T15 8t.288-.712T16 7h2q.425 0 .713.288T19 8v8q0 .425-.288.713T18 17t-.712-.288");
}
</style><path class="kjo4aac_r"/>`,
		"fallback": "material-symbols:format-h1-outline-rounded",
	});
}

export default Component;
