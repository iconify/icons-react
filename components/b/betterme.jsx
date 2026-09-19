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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.uygol4buj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.546 30.354V17.632l6.25 12.736l6.25-12.717v12.717m7.999-1.607a3.12 3.12 0 0 1-2.715 1.607c-1.726 0-3.125-1.426-3.125-3.184v-2.07c0-1.758 1.399-3.184 3.125-3.184s3.125 1.426 3.125 3.184v1.035h-6.25");
}
</style><rect class="j3s9ivbxi"/><path class="uygol4buj"/>`,
		"fallback": "arcticons:betterme",
	});
}

export default Component;
