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
		"content": `<style>.jhm3h8n4w {
  d: path("M2.5 5.5h19v13h-19Zm4 0v13M4.5 8h.01m-.01 4h.01m-.01 4h.01");
}

.oam1xruay {
  d: path("M8.75 16H19c0-2.25-1-3.75-3-3.75h-4.75c-1.5.5-2.25 2-2.5 3.75ZM12 12.25c0-2.25.75-3 2.25-3H17v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jhm3h8n4w"/><path class="oam1xruay"/></g>`,
		"fallback": "uix-sharp:care-instructions-tag",
	});
}

export default Component;
