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
		"content": `<style>.qiax6zx8c {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19V7h2v12h15v2zm4-4q-.825 0-1.412-.587T6 15V3h17v12q0 .825-.587 1.413T21 17zm0-2h13V5H8zm2-3h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4zm-7 6V5z");
}
</style><path class="qiax6zx8c"/>`,
		"fallback": "material-symbols:full-coverage-outline",
	});
}

export default Component;
