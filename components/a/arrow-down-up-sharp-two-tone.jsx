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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.j00hckb3p {
  stroke-opacity: 0.4;
  d: path("M17 22L17 3M12.7071 7.2929L17 3L21.2929 7.2929");
}

.kfeht6gak {
  d: path("M7 2L7 21M11.2929 16.7071L7 21L2.7071 16.7071");
}
</style><g class="gp_8x1bzb"><path class="j00hckb3p"/><path class="kfeht6gak"/></g>`,
		"fallback": "keyline-icons:arrow-down-up-sharp-two-tone",
	});
}

export default Component;
