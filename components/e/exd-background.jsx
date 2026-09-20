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

.mu8na3byv {
  fill: var(--svg-color--fff, #fff);
  d: path("M6.134 4H10.4v16H6.134zm11.732 0h-6.933l6.933 6.4zm0 16v-6.4L10.933 20z");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.wrsrm3dee {
  fill: var(--svg-color--ec793e, #ec793e);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="wrsrm3dee"/><path class="mu8na3byv"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:exd-background",
	});
}

export default Component;
