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
		"content": `<style>.g2i_ml2bi {
  fill: currentColor;
  d: path("M18 9V6h-3V4h3V1h2v3h3v2h-3v3zm-2 12H8v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h9.35q-.175.475-.262.975T13 5q0 2.5 1.75 4.25T19 11q.825 0 1.588-.213T22 10.2V17q0 .825-.587 1.413T20 19h-4z");
}
</style><path class="g2i_ml2bi"/>`,
		"fallback": "material-symbols:display-add",
	});
}

export default Component;
