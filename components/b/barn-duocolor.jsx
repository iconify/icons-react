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
		"content": `<style>.lk86uub1u {
  d: path("M20 21H4V10.667a2 2 0 0 1 .4-1.2l2.365-3.154a2 2 0 0 1 .57-.515l3.636-2.18a2 2 0 0 1 2.058 0l3.635 2.18a2 2 0 0 1 .571.515L19.6 9.467a2 2 0 0 1 .4 1.2zM3 21h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zqt8nlyes {
  stroke-opacity: 0.4;
  d: path("M9 21v-3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3m-5-11a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="nrj6p8qat"><path class="zqt8nlyes"/><path class="lk86uub1u"/></g>`,
		"fallback": "coolicons:barn-duocolor",
	});
}

export default Component;
