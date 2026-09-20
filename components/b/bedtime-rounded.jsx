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
		"content": `<style>.qpau-9b9r {
  fill: currentColor;
  d: path("M12.1 22q-2.1 0-3.937-.8t-3.2-2.162t-2.163-3.2T2 11.9q0-3.2 1.8-5.8t4.825-3.65q.55-.2 1.025.138t.45.912q-.075 2.125.675 4.05t2.25 3.425t3.425 2.25t4.05.675q.65-.025.963.438t.112 1.037q-1.1 3-3.687 4.813T12.1 22");
}
</style><path class="qpau-9b9r"/>`,
		"fallback": "material-symbols:bedtime-rounded",
	});
}

export default Component;
