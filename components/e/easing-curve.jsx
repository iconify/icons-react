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
		"content": `<style>.wcqktue2q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.314 4.306Q18.629 2.75 20.5 2.75q2.25 0 2.25 2.25T20.5 7.25q-1.79 0-2.156-1.424q-2.734.632-5.673 6.509q-3.386 6.771-6.985 7.359Q5.371 21.25 3.5 21.25q-2.25 0-2.25-2.25t2.25-2.25q1.79 0 2.156 1.424q2.734-.632 5.673-6.509q3.386-6.771 6.985-7.359");
}
</style><path class="wcqktue2q"/>`,
		"fallback": "uix-solid:easing-curve",
	});
}

export default Component;
