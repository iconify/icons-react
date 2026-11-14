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
		"content": `<style>.uke-5fwju {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.707 13.134q.082-.141.144-.282q.375 1.398 2.149 1.398q1.5 0 2-1q.5 1 2 1t2-1q.5 1 2 1q2.25 0 2.25-2.25T20 9.75q-1.5 0-2 1q-.5-1-2-1t-2 1q-.5-1-2-1q-1.774 0-2.149 1.398q-.062-.141-.144-.282l-.875-1.5Q8.18 8.25 6.888 8.25H5.112q-1.292 0-1.944 1.116l-.875 1.5q-.662 1.134 0 2.268l.875 1.5q.652 1.116 1.944 1.116h1.776q1.292 0 1.944-1.116zM11.25 12q0-.75.75-.75t.75.75t-.75.75t-.75-.75m4 0q0-.75.75-.75t.75.75t-.75.75t-.75-.75m4 0q0-.75.75-.75t.75.75t-.75.75t-.75-.75");
}
</style><path class="uke-5fwju"/>`,
		"fallback": "uix-solid:atp-molecule",
	});
}

export default Component;
