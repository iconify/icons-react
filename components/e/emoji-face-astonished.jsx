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
		"content": `<style>.l6cd208_p {
  cx: 24px;
  cy: 24px;
  r: 18.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nxj71ccyl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.942 35.394H18.384c0-3.218 1.922-5.775 5.775-5.775s5.8 2.565 5.8 5.775M11.522 15.55a5.07 5.07 0 0 1 2.727-2.413a5.07 5.07 0 0 1 3.644-.338m1.448 8.221a2.414 2.414 0 0 1-4.826 0c0-1.331 1.082-2.413 2.413-2.413s2.413 1.082 2.413 2.413m14.479 0a2.414 2.414 0 0 1-4.827 0c0-1.331 1.082-2.413 2.413-2.413s2.413 1.082 2.413 2.413m2.659-5.47a5.78 5.78 0 0 0-6.362-2.759");
}
</style><path class="nxj71ccyl"/><circle class="l6cd208_p"/>`,
		"fallback": "arcticons:emoji-face-astonished",
	});
}

export default Component;
