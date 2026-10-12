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
		"content": `<style>.ilmx_fbfh {
  cx: 6.5px;
  cy: 7.5px;
  r: 2.75px;
}

.jevjsnbuh {
  d: path("M14.25 20.25h7V17a3.75 3.75 0 0 0-7.5 0v3.25z");
}

.kwbnkab4e {
  d: path("M3.25 20.25h7V17a3.75 3.75 0 0 0-7.5 0v3.25z");
}

.szz5nabpn {
  cx: 17.5px;
  cy: 7.5px;
  r: 2.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y8-q1fbwc {
  d: path("m12.14 11.32l.75 1.69l.14.32l.35.03l1.84.19l.35.04l-.26.24l-1.38 1.23l-.26.23l.08.35l.38 1.8l.07.34l-.3-.17l-1.6-.92l-.3-.18l-.3.18l-1.6.92l-.3.17l.07-.34l.38-1.8l.08-.35l-.26-.23l-1.38-1.23l-.26-.24l.35-.04l1.84-.19l.35-.03l.14-.32l.75-1.69L12 11z");
}
</style><g class="x2cwu0gfd"><circle class="ilmx_fbfh"/><path class="kwbnkab4e"/><circle class="szz5nabpn"/><path class="jevjsnbuh"/><path class="y8-q1fbwc"/></g>`,
		"fallback": "iconoven:close-friends-sharp",
	});
}

export default Component;
