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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.nn6jjh0sm {
  d: path("M9 10h6v7H9Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w0sebyb3m {
  d: path("M9 13.5h6");
}

.yxow7abeb {
  fill: currentColor;
  d: path("M13 3H6v18h12V8");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zhwlonbym {
  fill: currentColor;
  d: path("M9 10h6v7H9Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="yxow7abeb"/><path class="zhwlonbym"/><path class="abnm6smsv"/><path class="nn6jjh0sm"/><path class="w0sebyb3m"/></g>`,
		"fallback": "iconmind:document-archive-duotone-regular",
	});
}

export default Component;
