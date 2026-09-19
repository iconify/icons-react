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
		"content": `<style>.p13c5lb7i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 1 2.5 24A21.503 21.503 0 0 1 24 2.5Z");
}

.pr421bbws {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M16.517 15.499h14.966a1.02 1.02 0 0 1 1.018 1.018v14.966a1.02 1.02 0 0 1-1.018 1.018H16.517a1.02 1.02 0 0 1-1.018-1.018V16.517a1.02 1.02 0 0 1 1.018-1.018Z");
}
</style><path class="p13c5lb7i"/><path class="pr421bbws"/>`,
		"fallback": "arcticons:inmage",
	});
}

export default Component;
