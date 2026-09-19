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
		"content": `<style>.bqsbe-gwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5a9.25 9.25 0 0 1 9.25 9.25v18.5A9.25 9.25 0 0 1 24 42.5h0a9.25 9.25 0 0 1-9.25-9.25v-18.5A9.25 9.25 0 0 1 24 5.5");
}

.mbmqvdbvg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 14.75h18.5A9.25 9.25 0 0 1 42.5 24h0a9.25 9.25 0 0 1-9.25 9.25h-18.5A9.25 9.25 0 0 1 5.5 24h0a9.25 9.25 0 0 1 9.25-9.25");
}
</style><path class="bqsbe-gwl"/><path class="mbmqvdbvg"/>`,
		"fallback": "arcticons:home-plus",
	});
}

export default Component;
