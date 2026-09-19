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
		"content": `<style>.jbj1zrf2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.73 42.11h-9.45c-9.45 0-14.74-10.4-10-18.08l7.15-11.68c2.18-3.56 6-6.5 10.27-6.46h0c3.33 0 6.75 2 9.4 6.47L41 24a12.82 12.82 0 0 1 .34 11.41M24.66 5.89");
}
</style><path class="jbj1zrf2v"/>`,
		"fallback": "arcticons:freebox2",
	});
}

export default Component;
