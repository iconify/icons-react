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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p52u7fomt {
  stroke-opacity: 0.4;
  d: path("m2 3l19 19");
}

.uohwllbmf {
  d: path("M19 14c0-6-7-11-7-11s-.954.681-2.157 1.843M7.079 8.079C5.913 9.797 5 11.833 5 14a7 7 0 0 0 12.425 4.425");
}
</style><g class="nrj6p8qat"><path class="p52u7fomt"/><path class="uohwllbmf"/></g>`,
		"fallback": "coolicons:droplet-off-duocolor",
	});
}

export default Component;
