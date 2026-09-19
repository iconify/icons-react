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
		"content": `<style>.l6ytns8jz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.508 30.804a6.853 6.853 0 0 0 9.69 9.69l23.295-23.297a6.853 6.853 0 0 0-9.69-9.69z");
}

.zm8n1wvit {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.803 7.507a6.853 6.853 0 0 0 0 9.69m-5.824-3.867a6.853 6.853 0 0 0 0 9.691m-5.824-3.866a6.854 6.854 0 0 0 0 9.69m-5.823-3.865a6.853 6.853 0 0 0 0 9.69");
}
</style><path class="l6ytns8jz"/><path class="zm8n1wvit"/>`,
		"fallback": "arcticons:emoji-baguette-bread",
	});
}

export default Component;
