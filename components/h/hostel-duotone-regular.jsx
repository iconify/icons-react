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
		"content": `<style>.bu4pt-b9w {
  d: path("M13 6v3.5h5V6");
}

.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.e_zu0lb2f {
  d: path("M10 22v-5h4v5");
}

.kez9tfbhk {
  d: path("M6 6v3.5h5V6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uw3g4ocav {
  fill: currentColor;
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wlp3ibbib {
  d: path("M6 13h12");
}
</style><g class="nrj6p8qat"><path class="uw3g4ocav"/><path class="d5czi6rdr"/><path class="e_zu0lb2f"/><path class="kez9tfbhk"/><path class="bu4pt-b9w"/><path class="wlp3ibbib"/></g>`,
		"fallback": "iconmind:hostel-duotone-regular",
	});
}

export default Component;
