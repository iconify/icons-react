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
		"content": `<style>.atoje4bsc {
  d: path("M2 6h20");
}

.e2r0vmbrh {
  d: path("M4 6v5h5v4h5v4h6");
}

.kf3k8pbxe {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 6h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kpiqhd6nn {
  d: path("M20 18.5V21");
}

.md3els_xo {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 6v5h5v4h5v4h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vipvelb3o {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 18.5V21");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="kf3k8pbxe"/><path class="md3els_xo"/><path class="vipvelb3o"/><path class="atoje4bsc"/><path class="e2r0vmbrh"/><path class="kpiqhd6nn"/></g>`,
		"fallback": "iconmind:basement-duotone-regular",
	});
}

export default Component;
