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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.i5e06nbvn {
  stop-color: var(--svg-color--f96829, #f96829);
}

.vm5itqb0u {
  stop-color: var(--svg-color--6347f4, #6347f4);
}

.x1u33ub3s {
  d: path("M9.852 3L3 9.828h11.173V21L21 14.172V3z");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGP2zvTlBl)" class="x1u33ub3s"/><defs><linearGradient id="SVGP2zvTlBl" x1="18.429" x2="3" y1="4.607" y2="21" gradientUnits="userSpaceOnUse"><stop class="i5e06nbvn"/><stop offset=".93" class="vm5itqb0u"/></linearGradient></defs></g>`,
		"fallback": "token-branded:ever",
	});
}

export default Component;
