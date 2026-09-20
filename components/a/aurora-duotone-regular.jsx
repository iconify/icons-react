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
		"content": `<style>.i67oc1bla {
  d: path("M5 16V8l4 -4");
}

.mbt4yzbhr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mkk0o-9le {
  d: path("M15 16V8l4 -4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nzhcuvf_z {
  d: path("M10 16V8l4 -4");
}

.qey1ipjhc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 16V8l4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qfaxfv35t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 16V8l4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yi2tajbnx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 16V8l4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="yi2tajbnx"/><path class="qey1ipjhc"/><path class="qfaxfv35t"/><path class="mbt4yzbhr"/><path class="i67oc1bla"/><path class="nzhcuvf_z"/><path class="mkk0o-9le"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:aurora-duotone-regular",
	});
}

export default Component;
