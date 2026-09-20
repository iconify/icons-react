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
		"content": `<style>.blt_0abbn {
  fill: currentColor;
  d: path("M5.21 7.781A.75.75 0 1 1 6.27 6.72l2.51 2.5a.75.75 0 0 1 0 1.061l-2.5 2.5a.75.75 0 0 1-1.06-1.06l1.22-1.22H2.75a.75.75 0 0 1 0-1.5h3.684zm9.58 0a.75.75 0 0 0-1.06-1.062l-2.51 2.5a.75.75 0 0 0 0 1.061l2.5 2.5a.75.75 0 1 0 1.06-1.06l-1.22-1.22h3.69a.75.75 0 0 0 0-1.5h-3.684z");
}
</style><path class="blt_0abbn"/>`,
		"fallback": "fluent:arrow-fit-in-20-filled",
	});
}

export default Component;
