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
		"content": `<style>.kgt7zbe3e {
  fill: currentColor;
  d: path("M11.288 21.713Q11 21.425 11 21V3q0-.425.288-.712T12 2t.713.288T13 3v18q0 .425-.288.713T12 22t-.712-.288M16 17q-.425 0-.712-.288T15 16V8q0-.425.288-.712T16 7h1q.425 0 .713.288T18 8v8q0 .425-.288.713T17 17zm-9 0q-.425 0-.712-.288T6 16V8q0-.425.288-.712T7 7h1q.425 0 .713.288T9 8v8q0 .425-.288.713T8 17z");
}
</style><path class="kgt7zbe3e"/>`,
		"fallback": "material-symbols:align-justify-center-rounded",
	});
}

export default Component;
