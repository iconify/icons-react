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
		"content": `<style>.mk103v7ua {
  fill: currentColor;
  d: path("M18 15v-2h2q.425 0 .713.288T21 14t-.288.713T20 15zm0 4v-2h2q.425 0 .713.288T21 18t-.288.713T20 19zm-4 1q-.825 0-1.412-.587T12 18h-2v-4h2q0-.825.588-1.412T14 12h3v8zm-7-3q-1.65 0-2.825-1.175T3 13t1.175-2.825T7 9h1.5q.625 0 1.063-.437T10 7.5t-.437-1.062T8.5 6H5q-.425 0-.712-.288T4 5t.288-.712T5 4h3.5q1.45 0 2.475 1.025T12 7.5t-1.025 2.475T8.5 11H7q-.825 0-1.412.588T5 13t.588 1.413T7 15h2v2z");
}
</style><path class="mk103v7ua"/>`,
		"fallback": "material-symbols:electrical-services",
	});
}

export default Component;
