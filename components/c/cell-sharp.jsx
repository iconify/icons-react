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
		"content": `<style>.c1b2cxbio {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 14h.01M13 17h.01");
}

.lwe_m8b2n {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c5.5 0 9.25 3.6 9.25 8.6c0 5.6-4.3 9.9-9.5 9.9c-5.3 0-9-3.8-9-9.1c0-5.55 3.85-9.4 9.25-9.4Z");
}

.t635rwblu {
  cx: 13.5px;
  cy: 10px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="lwe_m8b2n"/><circle class="t635rwblu"/><path class="c1b2cxbio"/></g>`,
		"fallback": "iconoven:cell-sharp",
	});
}

export default Component;
