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
		"content": `<style>.ax7m_bbkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.556 30.925H18.3M22.967 43.5H9.557V18.35h13.41M20.415 4.973a15 15 0 0 1 3.385-.469c6.802-.165 12.779 4.275 14.644 10.878m-16.585-4.445a9 9 0 0 1 1.941-.26c3.949-.096 7.452 2.396 8.688 6.18");
}
</style><path class="ax7m_bbkk"/>`,
		"fallback": "arcticons:eshare",
	});
}

export default Component;
