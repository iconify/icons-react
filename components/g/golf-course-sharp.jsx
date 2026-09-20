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
		"content": `<style>.l2z-2tbci {
  fill: currentColor;
  d: path("M19.502 20.5q-.415 0-.709-.291t-.293-.707t.291-.709t.707-.293t.709.291t.293.707t-.291.709t-.707.293m-9.5 1q-2.29 0-3.896-.434Q4.5 20.633 4.5 20q0-.485 1.094-.865t2.368-.5v1.48H9.5V2.809L15.885 5.9L10.5 8.692v9.82q2.15.124 3.575.526T15.5 20q0 .633-1.604 1.066q-1.603.434-3.894.434");
}
</style><path class="l2z-2tbci"/>`,
		"fallback": "material-symbols-light:golf-course-sharp",
	});
}

export default Component;
