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
		"content": `<style>.jmxm85mhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0M12 17l3.5 3.5m2.625-15.875l.139.324a1.5 1.5 0 0 0 .787.787l.324.139a.408.408 0 0 1 0 .75l-.324.139a1.5 1.5 0 0 0-.787.787l-.139.324a.408.408 0 0 1-.75 0l-.139-.324a1.5 1.5 0 0 0-.787-.787l-.324-.139a.408.408 0 0 1 0-.75l.324-.139a1.5 1.5 0 0 0 .787-.787l.139-.324a.408.408 0 0 1 .75 0");
}
</style><path class="jmxm85mhf"/>`,
		"fallback": "uix:ai-search",
	});
}

export default Component;
