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
		"content": `<style>.u79igzbdm {
  fill: currentColor;
  d: path("M15 17q-.425 0-.712-.288T14 16V8q0-.425.288-.712T15 7h1q.425 0 .713.288T17 8v8q0 .425-.288.713T16 17zm-7 0q-.425 0-.712-.288T7 16V8q0-.425.288-.712T8 7h1q.425 0 .713.288T10 8v8q0 .425-.288.713T9 17zm12.288 4.713Q20 21.425 20 21V3q0-.425.288-.712T21 2t.713.288T22 3v18q0 .425-.288.713T21 22t-.712-.288M3 22q-.425 0-.712-.288T2 21V3q0-.425.288-.712T3 2t.713.288T4 3v18q0 .425-.288.713T3 22");
}
</style><path class="u79igzbdm"/>`,
		"fallback": "material-symbols:align-justify-space-even-outline-rounded",
	});
}

export default Component;
