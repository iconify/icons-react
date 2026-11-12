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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sduv6uq4w {
  d: path("M15 11.9971C15 13.6539 13.6569 14.9971 12 14.9971C10.3431 14.9971 9 13.6539 9 11.9971C9 10.3402 10.3431 8.99707 12 8.99707C13.6569 8.99707 15 10.3402 15 11.9971Z");
}

.u1yvpnjhe {
  d: path("M2 11.9971L9 11.9971");
}

.zfk5qrblp {
  d: path("M15 12.002L22 12.002");
}
</style><g class="ipq1z-bjh"><path class="sduv6uq4w"/><path class="u1yvpnjhe"/><path class="zfk5qrblp"/></g>`,
		"fallback": "solar:git-commit-linear",
	});
}

export default Component;
