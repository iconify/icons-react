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
		"content": `<style>.l7qk6g00j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.25L21.75 12L12 21.75L2.25 12Zm0 4v2M12 11v2m0 2.75v2");
}
</style><path class="l7qk6g00j"/>`,
		"fallback": "uix-sharp:border-ahead",
	});
}

export default Component;
