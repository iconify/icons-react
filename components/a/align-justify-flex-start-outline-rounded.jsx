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
		"content": `<style>.bgi2tvy5r {
  fill: currentColor;
  d: path("M3 22q-.425 0-.712-.288T2 21V3q0-.425.288-.712T3 2t.713.288T4 3v18q0 .425-.288.713T3 22m11-5q-.425 0-.712-.288T13 16V8q0-.425.288-.712T14 7h1q.425 0 .713.288T16 8v8q0 .425-.288.713T15 17zm-6 0q-.425 0-.712-.288T7 16V8q0-.425.288-.712T8 7h1q.425 0 .713.288T10 8v8q0 .425-.288.713T9 17z");
}
</style><path class="bgi2tvy5r"/>`,
		"fallback": "material-symbols:align-justify-flex-start-outline-rounded",
	});
}

export default Component;
