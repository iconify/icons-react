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
		"content": `<style>.vtlv1jboo {
  d: path("M3.25 20.25c0-3.5 3-5.75 6.75-5.75s6.75 2.25 6.75 5.75v1H3.25zM18.5 3.5l.33 2.42l2.42.33l-2.42.33L18.5 9l-.33-2.42l-2.42-.33l2.42-.33z");
}

.x1mm-qbte {
  cx: 10px;
  cy: 8px;
  r: 4.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="x1mm-qbte"/><path class="vtlv1jboo"/></g>`,
		"fallback": "iconoven:avatar-ai-sharp",
	});
}

export default Component;
