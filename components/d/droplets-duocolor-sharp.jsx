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

.sey0u8bkh {
  d: path("M8 8.143S3 11.714 3 16a5 5 0 0 0 10 0c0-4.286-5-7.857-5-7.857");
}

.zhh3sd7xb {
  stroke-opacity: 0.4;
  d: path("M18 3s-3 2.143-3 4.714a3 3 0 0 0 6 0C21 5.143 18 3 18 3");
}
</style><g class="nrj6p8qat"><path class="zhh3sd7xb"/><path class="sey0u8bkh"/></g>`,
		"fallback": "coolicons:droplets-duocolor-sharp",
	});
}

export default Component;
