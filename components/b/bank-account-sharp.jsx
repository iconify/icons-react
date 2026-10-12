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
		"content": `<style>.exjrd6yen {
  d: path("m3.55 7.65l5.15-3.8l.8-.6l.8.6l5.15 3.8l.8.6H2.75zM5.25 11v5.5M9.5 11v5.5m-6.75 3H12");
}

.opd1rb5sr {
  cx: 17.5px;
  cy: 13.75px;
  r: 2px;
}

.ryyhgna5c {
  d: path("M13.75 21.25a3.75 3.75 0 0 1 7.5 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="exjrd6yen"/><circle class="opd1rb5sr"/><path class="ryyhgna5c"/></g>`,
		"fallback": "iconoven:bank-account-sharp",
	});
}

export default Component;
