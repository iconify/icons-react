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
		"content": `<style>.fi39hxb-j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 10.889V20a1.243 1.243 0 0 1-1.793 1.114l-6.093-3.008A2 2 0 0 1 3 16.313V7.687a2 2 0 0 1 1.114-1.793l7-3.457a2 2 0 0 1 1.772 0l6.321 3.122a.987.987 0 0 1 0 1.771Z");
}

.ft5dv1b6b {
  fill: none;
}

.ll4clabto {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12V7.687a2 2 0 0 0-1.114-1.793L16.5 4.222m0 0l-3.614-1.785a2 2 0 0 0-1.772 0l-7 3.457A2 2 0 0 0 3 7.687v8.626a2 2 0 0 0 1.114 1.793l6.093 3.008A1.243 1.243 0 0 0 12 20v-9.111M3.32 6.602L12 10.89l8.68-4.287M18 21l3-3l-3-3m3 3h-6");
}
</style><g class="ft5dv1b6b"><path class="fi39hxb-j"/><path class="ll4clabto"/></g>`,
		"fallback": "coolicons:box-export-duotone-round",
	});
}

export default Component;
