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
		"content": `<style>.vdyr6fb8j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.5 24H24v16.5a2 2 0 0 0 2 2h14.5a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2h-33a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2M24 24V5.5M42.5 24H24");
}
</style><path class="vdyr6fb8j"/>`,
		"fallback": "arcticons:block-blast-adventure-master",
	});
}

export default Component;
