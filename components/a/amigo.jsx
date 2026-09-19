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
		"content": `<style>.e8jgrbb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.516 8.524L6.242 34.578c-3.185 6.252 3.275 10.082 6.87 6.607l3.464-3.347c5.847-5.65 9.229-5.53 14.963.204l2.474 2.474c4.416 4.416 10.917.144 7.773-5.967L28.395 8.523c-2.074-4.031-6.824-4.033-8.879 0");
}

.qt-qjicjs {
  cx: 23.997px;
  cy: 23.05px;
  r: 5.167px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="qt-qjicjs"/><path class="e8jgrbb7c"/>`,
		"fallback": "arcticons:amigo",
	});
}

export default Component;
