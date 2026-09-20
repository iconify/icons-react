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
		"content": `<style>.u5qz9ti5e {
  fill: currentColor;
  d: path("M14.38 19.74q-.382.18-.764.034q-.383-.145-.562-.528L10.13 12.97l-1.94 2.693q-.349.484-.905.307t-.555-.767V5.166q0-.51.457-.728t.86.087l8.004 6.296q.46.367.26.908q-.199.54-.77.54h-3.546l2.879 6.144q.179.383.034.766q-.146.383-.528.562");
}
</style><path class="u5qz9ti5e"/>`,
		"fallback": "material-symbols-light:arrow-selector-tool-rounded",
	});
}

export default Component;
