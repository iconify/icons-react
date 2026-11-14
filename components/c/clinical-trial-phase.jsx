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
		"content": `<style>.a5uqb5btg {
  d: path("M9 14v4");
}

.b4yvvb2hq {
  fill: currentColor;
  d: path("M15 6h6v12h-6Z");
}

.eijuybbnf {
  d: path("M3 18v-4h6v-4h6v8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eijuybbnf"/><path class="b4yvvb2hq"/><path class="a5uqb5btg"/></g>`,
		"fallback": "uix-sharp:clinical-trial-phase",
	});
}

export default Component;
