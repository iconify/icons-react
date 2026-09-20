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
		"content": `<style>.a2-c7zxii {
  fill: currentColor;
  d: path("M13 20v1q0 .425-.288.713T12 22t-.712-.288T11 21v-4q0-.425.288-.712T12 16t.713.288T13 17v1h7q.425 0 .713.288T21 19t-.288.713T20 20zm-9 0q-.425 0-.712-.288T3 19t.288-.712T4 18h4q.425 0 .713.288T9 19t-.288.713T8 20zm5.6-9.075h4.825l.85 2.45q.1.275.35.45t.55.175q.5 0 .8-.425t.1-.9L13.325 2.65q-.125-.3-.375-.475T12.375 2h-.75q-.325 0-.575.175t-.375.475L6.9 12.7q-.175.475.113.888T7.8 14q.325 0 .563-.175t.362-.475zm.6-1.725l1.75-4.975h.1L13.8 9.2z");
}
</style><path class="a2-c7zxii"/>`,
		"fallback": "material-symbols:custom-typography-rounded",
	});
}

export default Component;
