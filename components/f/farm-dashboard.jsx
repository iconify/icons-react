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
		"content": `<style>.bsq-2mbvl {
  d: path("M12.75 14.5a3 3 0 0 1 6 0m-3 0l1.75-2.25");
}

.q84mzdbvw {
  d: path("M2.5 4.5h19v15h-19Zm3.75 12V12m3 4.5v-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q84mzdbvw"/><path class="bsq-2mbvl"/></g>`,
		"fallback": "uix-sharp:farm-dashboard",
	});
}

export default Component;
