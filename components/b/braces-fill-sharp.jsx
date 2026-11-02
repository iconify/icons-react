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
		"content": `<style>.ebcri32bw {
  fill: currentColor;
  d: path("M7 8v2c0 .265-.105.52-.293.707L5.414 12l1.293 1.293A1 1 0 0 1 7 14v2h1a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1v-2.586l-1.707-1.707a1 1 0 0 1 0-1.414L5 9.586V7a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2Zm11-2a1 1 0 0 1 1 1v2.586l1.707 1.707a1 1 0 0 1 0 1.414L19 14.414V17a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h1v-2c0-.265.105-.52.293-.707L18.586 12l-1.293-1.293A1 1 0 0 1 17 10V8h-1a1 1 0 0 1 0-2Z");
}
</style><path class="ebcri32bw"/>`,
		"fallback": "coolicons:braces-fill-sharp",
	});
}

export default Component;
