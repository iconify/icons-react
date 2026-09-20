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
		"content": `<style>.amujw3_wp {
  d: path("m9.5 13 2.5 2.5 2.5 -2.5");
}

.lf67ljb6v {
  d: path("M4 19.25A2.25 2.25 0 0 1 6.25 17h11.5A2.25 2.25 0 0 1 20 19.25a2.25 2.25 0 0 1 -2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.25");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v-v1vx84b {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.xpjur0b_h {
  d: path("M12 11.5V14");
}
</style><g class="nrj6p8qat"><path class="v-v1vx84b"/><path class="xpjur0b_h"/><path class="amujw3_wp"/><path class="lf67ljb6v"/></g>`,
		"fallback": "iconmind:backup-tier-outline-regular",
	});
}

export default Component;
