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
		"content": `<style>.mmxjx2bqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12M6 21h12M12 3v2.5l5 2l-10 3l10 3l-10 3l5 2V21");
}
</style><path class="mmxjx2bqo"/>`,
		"fallback": "uix-sharp:hookes-law",
	});
}

export default Component;
