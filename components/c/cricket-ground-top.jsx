import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e_vzqcbjq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.818 6.108Q1.75 8.53 1.75 12t3.068 5.892Q7.805 20.25 12 20.25t7.182-2.358Q22.25 15.47 22.25 12t-3.068-5.892Q16.195 3.75 12 3.75T4.818 6.108M12 6.75q2.25 0 2.25 2.25v6q0 2.25-2.25 2.25T9.75 15V9q0-2.25 2.25-2.25");
}
</style><path class="e_vzqcbjq"/>`,
		"fallback": "uix-solid:cricket-ground-top",
	});
}

export default Component;
