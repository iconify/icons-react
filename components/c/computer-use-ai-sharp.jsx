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
		"content": `<style>.lch8njzqj {
  d: path("m10.05 6.48l5.4 2.29L16 9l-.55.25l-1.65.75l-.55.25l-.25.55l-.75 1.65L12 13l-.21-.56l-2.08-5.63l-.21-.56z");
}

.x06dkab3n {
  d: path("M2.75 3.25h18.5v12.5H2.75zm5.75 17.5h7m-3.5-5v5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x06dkab3n"/><path class="lch8njzqj"/></g>`,
		"fallback": "iconoven:computer-use-ai-sharp",
	});
}

export default Component;
