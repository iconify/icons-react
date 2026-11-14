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
		"content": `<style>.c7loiy3ds {
  d: path("M3.5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m6 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m6 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-13 10c0-2.5 1.5-3.5 3.5-3.5s3.5 1 3.5 3.5");
}

.ez-fqkb8h {
  d: path("M8.5 17c0-2.5 1.5-3.5 3.5-3.5s3.5 1 3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9owrdbvb {
  d: path("M14.5 17c0-2.5 1.5-3.5 3.5-3.5s3.5 1 3.5 3.5");
}
</style><g class="hntgybcog"><path class="c7loiy3ds"/><path class="ez-fqkb8h"/><path class="y9owrdbvb"/></g>`,
		"fallback": "uix:bank-queue",
	});
}

export default Component;
