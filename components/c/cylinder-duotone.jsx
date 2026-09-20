import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.lp1p32dvr {
  d: path("M128 16c-40.37 0-72 19.33-72 44v136c0 24.67 31.63 44 72 44s72-19.33 72-44V60c0-24.67-31.63-44-72-44m0 16c26.49 0 56 11.5 56 28s-29.51 28-56 28s-56-11.5-56-28s29.51-28 56-28m0 192c-29.83 0-56-13.08-56-28V88c13.1 9.85 33.14 16 56 16s42.9-6.2 56-16v108c0 14.92-26.17 28-56 28");
}

.q5_g9rhpq {
  d: path("M192 60c0 19.88-28.65 36-64 36S64 79.88 64 60s28.65-36 64-36s64 16.12 64 36");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="q5_g9rhpq"/><path class="lp1p32dvr"/></g>`,
		"fallback": "ph:cylinder-duotone",
	});
}

export default Component;
