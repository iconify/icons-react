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
		"content": `<style>.awan9sb2a {
  d: path("M7.25 7.75a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Zm0 6.5a2 2 0 1 1-2 2m11.5-2a2 2 0 1 1-2 2");
}

.kxb2_kk9n {
  d: path("M2.5 16.25a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Zm9.5 0a4.75 4.75 0 1 0 9.5 0a4.75 4.75 0 1 0-9.5 0Z");
}

.rhh4v4bgw {
  d: path("M12 5.75a2 2 0 1 1-2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kxb2_kk9n"/><path class="awan9sb2a"/><path class="rhh4v4bgw"/></g>`,
		"fallback": "uix-sharp:bale-stack",
	});
}

export default Component;
