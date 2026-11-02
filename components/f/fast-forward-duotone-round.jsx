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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.qu2axurud {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11.029 10.285c.608.365.978 1.005.971 1.714V9a2 2 0 0 1 3.029-1.715l5 3a2 2 0 0 1 0 3.43l-5 3A1.999 1.999 0 0 1 12 15v-2.999c0 .709-.359 1.355-.971 1.714l-5 3A1.999 1.999 0 0 1 3 15V9a2 2 0 0 1 3.029-1.715Z");
}

.wioktmbig {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6.029 7.285l5 3c1.295.777 1.295 2.653 0 3.43l-5 3C4.696 17.515 3 16.555 3 15V9c0-1.555 1.696-2.515 3.029-1.715m9 0l5 3c1.295.777 1.295 2.653 0 3.43l-5 3C13.696 17.515 12 16.555 12 15V9c0-1.555 1.696-2.515 3.029-1.715");
}
</style><g class="ft5dv1b6b"><path class="qu2axurud"/><path class="wioktmbig"/></g>`,
		"fallback": "coolicons:fast-forward-duotone-round",
	});
}

export default Component;
