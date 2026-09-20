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
		"content": `<style>.jkuojibnm {
  d: path("M3 20h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qc4g9_58r {
  d: path("M14 11h4v6h-4Z");
}

.qfaesy8qk {
  fill: currentColor;
  d: path("M14 11h4v6h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rtofn9dtv {
  d: path("M7 7h4v10H7Z");
}

.x20zxc0rm {
  fill: currentColor;
  d: path("M7 7h4v10H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="x20zxc0rm"/><path class="qfaesy8qk"/><path class="jkuojibnm"/><path class="rtofn9dtv"/><path class="qc4g9_58r"/></g>`,
		"fallback": "iconmind:align-end-horizontal-duotone-regular",
	});
}

export default Component;
