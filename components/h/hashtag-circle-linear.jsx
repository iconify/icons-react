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
		"content": `<style>.dh-0v0bfa {
  stroke-linejoin: round;
  d: path("M17 14H6");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mv-pxdb7h {
  stroke-linejoin: round;
  d: path("M18 10H7");
}

.qzz1y5j1i {
  stroke-linejoin: round;
  d: path("M16 7L13 17");
}

.spo4lsrxb {
  stroke-linejoin: round;
  d: path("M11 7L8 17");
}

.w3r9-bcte {
  d: path("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z");
}
</style><g class="ipq1z-bjh"><path class="spo4lsrxb"/><path class="qzz1y5j1i"/><path class="mv-pxdb7h"/><path class="dh-0v0bfa"/><path class="w3r9-bcte"/></g>`,
		"fallback": "solar:hashtag-circle-linear",
	});
}

export default Component;
