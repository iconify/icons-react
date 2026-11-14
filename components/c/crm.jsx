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
		"content": `<style>.ogbtfdbcm {
  d: path("M5.5 10V8.5A1.5 1.5 0 0 1 7 7h10a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 17 17h-1.5");
}

.qlnlfob5e {
  d: path("M2.5 10h13v10h-13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vnrefqbky {
  d: path("M8.5 7V5.5A1.5 1.5 0 0 1 10 4h10a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 14h-1.5m-13 1h5");
}
</style><g class="ulnmmdpxh"><path class="qlnlfob5e"/><path class="ogbtfdbcm"/><path class="vnrefqbky"/></g>`,
		"fallback": "uix-sharp:crm",
	});
}

export default Component;
