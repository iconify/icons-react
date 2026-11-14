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
		"content": `<style>.arxa1nb2x {
  fill: currentColor;
  d: path("M12 6.25q.5 5.25 4 5.75q-3.5.5-4 5.75q-.5-5.25-4-5.75q3.5-.5 4-5.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rswdo2b9h {
  d: path("m13.034 2.983l.509.485a1.5 1.5 0 0 0 1.386.372l.684-.166a1.5 1.5 0 0 1 1.791 1.034l.199.675a1.5 1.5 0 0 0 1.014 1.014l.675.199a1.5 1.5 0 0 1 1.034 1.791l-.166.684a1.5 1.5 0 0 0 .372 1.386l.485.509a1.5 1.5 0 0 1 0 2.068l-.485.509a1.5 1.5 0 0 0-.372 1.386l.166.684a1.5 1.5 0 0 1-1.034 1.791l-.675.199a1.5 1.5 0 0 0-1.014 1.014l-.199.675a1.5 1.5 0 0 1-1.791 1.034l-.684-.166a1.5 1.5 0 0 0-1.386.372l-.509.485a1.5 1.5 0 0 1-2.068 0l-.509-.485a1.5 1.5 0 0 0-1.386-.372l-.684.166a1.5 1.5 0 0 1-1.791-1.034l-.199-.675a1.5 1.5 0 0 0-1.014-1.014l-.675-.199a1.5 1.5 0 0 1-1.034-1.791l.166-.684a1.5 1.5 0 0 0-.372-1.386l-.485-.509a1.5 1.5 0 0 1 0-2.068l.485-.509a1.5 1.5 0 0 0 .372-1.386l-.166-.684a1.5 1.5 0 0 1 1.034-1.791l.675-.199a1.5 1.5 0 0 0 1.014-1.014l.199-.675a1.5 1.5 0 0 1 1.791-1.034l.684.166a1.5 1.5 0 0 0 1.386-.372l.509-.485a1.5 1.5 0 0 1 2.068 0");
}
</style><g class="hntgybcog"><path class="rswdo2b9h"/><path class="arxa1nb2x"/></g>`,
		"fallback": "uix:category-new-in",
	});
}

export default Component;
