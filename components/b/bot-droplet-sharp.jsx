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
		"content": `<style>.g86fdm6kx {
  d: path("M9.8705 10.7535L10.5816 15.4178M13.8248 10.1507L14.5359 14.815");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tmc_ed9-n {
  stroke-linejoin: miter;
  d: path("M17.7728 8.4615C19.202 9.9512 20 11.9356 20 14C20 18.4183 16.4183 22 12 22C7.5817 22 4 18.4183 4 14C4 11.9356 4.798 9.9512 6.2272 8.4615L12 2.4444L17.7728 8.4615Z");
}
</style><g class="gp_8x1bzb"><path class="tmc_ed9-n"/><path class="g86fdm6kx"/></g>`,
		"fallback": "keyline-icons:bot-droplet-sharp",
	});
}

export default Component;
