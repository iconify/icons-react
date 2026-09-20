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
		"content": `<style>.emd0c26nz {
  fill: currentColor;
  d: path("M9.385 2.5v-1h5.23v1zm.598 13.304L8.317 12.5H4.012q.182-3.164 2.482-5.332T12 5q1.454 0 2.812.52t2.492 1.469l1.092-1.093l.708.708l-1.092 1.092q.857 1.031 1.38 2.251q.524 1.22.597 2.553h-3.677L14 7.98zM12 21q-3.206 0-5.506-2.178T4.012 13.5h3.677L10 18l4.017-7.804l1.685 3.304h4.287q-.183 3.144-2.48 5.322T12 21");
}
</style><path class="emd0c26nz"/>`,
		"fallback": "material-symbols-light:avg-time-sharp",
	});
}

export default Component;
