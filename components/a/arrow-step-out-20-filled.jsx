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
		"content": `<style>.yd3_dsb3p {
  fill: currentColor;
  d: path("M12 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-4a.5.5 0 0 0 .5-.5V3.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L9.5 3.707V11.5a.5.5 0 0 0 .5.5");
}
</style><path class="yd3_dsb3p"/>`,
		"fallback": "fluent:arrow-step-out-20-filled",
	});
}

export default Component;
