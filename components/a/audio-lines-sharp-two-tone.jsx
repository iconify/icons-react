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
		"content": `<style>.bfgkgvs1u {
  d: path("M4 9L4 15M12 2L12 22M20 9L20 15");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.gx0xjxlxa {
  stroke-opacity: 0.4;
  d: path("M8 5L8 19M16 6L16 18");
}
</style><g class="gp_8x1bzb"><path class="gx0xjxlxa"/><path class="bfgkgvs1u"/></g>`,
		"fallback": "keyline-icons:audio-lines-sharp-two-tone",
	});
}

export default Component;
