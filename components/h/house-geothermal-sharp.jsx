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
		"content": `<style>.fq5nz6bog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 3l5.333 4.667V15H6.667V7.667zm0 12v4m-6 2v-2h12v2m-8-2v2m4-2v2");
}
</style><path class="fq5nz6bog"/>`,
		"fallback": "coolicons:house-geothermal-sharp",
	});
}

export default Component;
