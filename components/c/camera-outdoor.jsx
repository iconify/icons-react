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
		"content": `<style>.zncae5yka {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v2h-7q-.825 0-1.412.588T11 13v4q0 .825.588 1.413T13 19h7v2zm9-3q-.425 0-.712-.288T12 17v-4q0-.425.288-.712T13 12h4q.425 0 .713.288T18 13v1l2-1.05v4.1L18 16v1q0 .425-.288.713T17 18z");
}
</style><path class="zncae5yka"/>`,
		"fallback": "material-symbols:camera-outdoor",
	});
}

export default Component;
