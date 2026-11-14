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
		"content": `<style>.lc--3dbyp {
  d: path("M7 11v10.5h10V11");
}

.nwdvcodjo {
  d: path("M10 13.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2 4.75h.01");
}

.pvcr_tbus {
  d: path("M2.5 3h19M12 3v3m-7 7l7-7l7 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pvcr_tbus"/><path class="lc--3dbyp"/><path class="nwdvcodjo"/></g>`,
		"fallback": "uix-sharp:bird-box",
	});
}

export default Component;
