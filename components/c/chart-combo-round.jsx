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
		"content": `<style>.q0sirkblq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16v4m6-6v6m6-8v8M3 4v12a4 4 0 0 0 4 4h14M3 11l4-4c1.163-1.163 3.256-1.163 5 0s3.837 1.163 5 0l4-4");
}
</style><path class="q0sirkblq"/>`,
		"fallback": "coolicons:chart-combo-round",
	});
}

export default Component;
