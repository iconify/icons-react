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
		"content": `<style>.d6247rboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.058 16.289l6.377 1.955l-6.324 2.613m19.831-4.568l-6.377 1.955l6.324 2.613m-19.597 8.72l2.841-2.33l3.162 4.464l3.707-3.253l3.706 3.253l3.172-4.464l2.841 2.337v-.009");
}

.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="d6247rboh"/><circle class="l6cd208_p"/>`,
		"fallback": "arcticons:emoji-face-confounded",
	});
}

export default Component;
