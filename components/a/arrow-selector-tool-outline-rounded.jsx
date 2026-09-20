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
		"content": `<style>.c-cgunb9t {
  fill: currentColor;
  d: path("m7.73 14.596l2.38-3.327h4.884L7.731 5.562zm6.65 5.145q-.382.178-.764.033q-.383-.145-.562-.528L10.13 12.97l-1.94 2.693q-.349.484-.905.307t-.555-.767V5.166q0-.51.457-.728t.86.087l8.004 6.296q.46.367.26.908q-.199.54-.77.54h-3.546l2.879 6.144q.179.383.034.766q-.146.383-.528.562m-4.271-8.472");
}
</style><path class="c-cgunb9t"/>`,
		"fallback": "material-symbols-light:arrow-selector-tool-outline-rounded",
	});
}

export default Component;
