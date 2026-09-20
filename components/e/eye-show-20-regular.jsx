import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a_yz_3bgn {
  d: path("M3.26 11.602C3.942 8.327 6.793 6 10 6c3.206 0 6.057 2.327 6.74 5.602a.5.5 0 0 0 .98-.204C16.943 7.673 13.693 5 10 5c-3.693 0-6.943 2.673-7.72 6.398a.5.5 0 0 0 .98.204z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}

.lj9b8l4qj {
  d: path("M10 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm-2.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="a_yz_3bgn"/><path class="lj9b8l4qj"/></g>`,
		"fallback": "fluent:eye-show-20-regular",
	});
}

export default Component;
