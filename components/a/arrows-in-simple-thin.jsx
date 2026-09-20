import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t67m_jb2b {
  fill: currentColor;
  d: path("M210.83 50.83L153.66 108H192a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4V64a4 4 0 0 1 8 0v38.34l57.17-57.17a4 4 0 1 1 5.66 5.66M112 140H64a4 4 0 0 0 0 8h38.34l-57.17 57.17a4 4 0 0 0 5.66 5.66L108 153.66V192a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4");
}
</style><path class="t67m_jb2b"/>`,
		"fallback": "ph:arrows-in-simple-thin",
	});
}

export default Component;
