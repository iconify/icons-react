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
		"content": `<style>.ez-fqkb8h {
  d: path("M8.5 17c0-2.5 1.5-3.5 3.5-3.5s3.5 1 3.5 3.5");
}

.s3kvjjbzq {
  d: path("M3.5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm6 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm6 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-13 10c0-2.5 1.5-3.5 3.5-3.5s3.5 1 3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9owrdbvb {
  d: path("M14.5 17c0-2.5 1.5-3.5 3.5-3.5s3.5 1 3.5 3.5");
}
</style><g class="ulnmmdpxh"><path class="s3kvjjbzq"/><path class="ez-fqkb8h"/><path class="y9owrdbvb"/></g>`,
		"fallback": "uix-sharp:bank-queue",
	});
}

export default Component;
