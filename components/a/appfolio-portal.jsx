import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dvfjoxrhm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.322 43.5l-16.494-2.519V7.912L29.322 4.5zm0-35.912h5.85v33.8");
}

.m--thhb8j {
  cx: 25.584px;
  cy: 26.173px;
  r: 1.503px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="dvfjoxrhm"/><circle class="m--thhb8j"/>`,
		"fallback": "arcticons:appfolio-portal",
	});
}

export default Component;
