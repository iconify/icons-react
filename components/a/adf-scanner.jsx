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
		"content": `<style>.gue-ztwhe {
  fill: currentColor;
  d: path("M2 20v-5q0-1.25.875-2.125T5 12h1V4h12v8h1q1.25 0 2.125.875T22 15v5zm6-8h8V6H8zm10 5q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17");
}
</style><path class="gue-ztwhe"/>`,
		"fallback": "material-symbols:adf-scanner",
	});
}

export default Component;
