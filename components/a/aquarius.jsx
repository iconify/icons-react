import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qnvxqts5a {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M85.04 82.16L71.59 68.75L46.11 82.17L32.64 68.74L9.79 80.78v19.21L29.5 89.61l13.47 13.42l25.47-13.41l13.46 13.42l25.46-13.43l10.85 10.81v-24l-7.71-7.68zm25.46-57.2L85.04 38.38L71.59 24.97L46.11 38.39L32.64 24.96L9.79 37v19.22L29.5 45.83l13.47 13.42l25.47-13.41L81.9 59.26l25.46-13.42l10.85 10.8v-24z");
}
</style><path class="qnvxqts5a"/>`,
		"fallback": "noto-v1:aquarius",
	});
}

export default Component;
