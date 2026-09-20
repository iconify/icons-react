import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sd9kle-ut {
  fill: var(--svg-color--fac864, #fac864);
  fill-rule: evenodd;
  d: path("M2 7.79A1 1 0 0 1 3 7h.3L14 9.59a7.2 7.2 0 0 0 4 0L28.71 7A1 1 0 0 1 29 7a1 1 0 0 1 .25 2l-10.77 2.58A1.86 1.86 0 0 0 17 13.39v1.31a3.3 3.3 0 0 0 .51 1.75l4.08 6.3a1.36 1.36 0 0 0 2.14.19l4.47-4.8a1 1 0 0 1 1.5 1.39l-4.47 4.8a3.41 3.41 0 0 1-5.36-.46l-3.71-5.74a.24.24 0 0 0-.31-.07a.2.2 0 0 0-.07.07l-3.68 5.74a3.41 3.41 0 0 1-5.36.46l-4.46-4.8a1 1 0 0 1 .05-1.44a1 1 0 0 1 1.45.05l4.46 4.8a1.37 1.37 0 0 0 1.93.07a1.3 1.3 0 0 0 .21-.26l4.08-6.3A3.2 3.2 0 0 0 15 14.7v-1.3a1.87 1.87 0 0 0-1.45-1.82L2.79 9A1 1 0 0 1 2 7.79");
}
</style><path class="sd9kle-ut"/>`,
		"fallback": "vscode-icons:file-type-toit",
	});
}

export default Component;
