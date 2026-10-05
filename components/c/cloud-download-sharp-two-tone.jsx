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
		"content": `<style>.ejmy1hbkh {
  d: path("M12 12L12 13L12 21M7.7071 16.7071L8 17L12 21L16 17L16.2929 16.7071");
}

.fa0bqbbbr {
  stroke-opacity: 0.4;
  d: path("M4.5 16.7528L4 16.4641C2.7624 15.7496 2 14.4291 2 13C2 10.7909 3.7909 9 6 9C6 5.6863 8.6863 3 12 3C15.3137 3 18 5.6863 18 9C20.2091 9 22 10.7909 22 13C22 14.4291 21.2376 15.7496 20 16.4641L19.5 16.7528");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="fa0bqbbbr"/><path class="ejmy1hbkh"/></g>`,
		"fallback": "keyline-icons:cloud-download-sharp-two-tone",
	});
}

export default Component;
