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
		"content": `<style>.cz3zo3n7c {
  fill: currentColor;
  d: path("M2 20v-5q0-1.25.875-2.125T5 12h1V4h12v8h1q1.25 0 2.125.875T22 15v5zm6-8h8V6H8zm-4 6h16v-3q0-.425-.288-.712T19 14H5q-.425 0-.712.288T4 15zm14-1q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17M4 14h16z");
}
</style><path class="cz3zo3n7c"/>`,
		"fallback": "material-symbols:adf-scanner-outline",
	});
}

export default Component;
