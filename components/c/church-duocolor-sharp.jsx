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
		"content": `<style>.d5_18n1qg {
  d: path("M8 21V11l4-4l4 4v10m-8-8l-4 2v6h16v-6l-4-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ohdwadw8m {
  stroke-opacity: 0.4;
  d: path("M12 3v4m-2-2h4");
}
</style><g class="nrj6p8qat"><path class="ohdwadw8m"/><path class="d5_18n1qg"/></g>`,
		"fallback": "coolicons:church-duocolor-sharp",
	});
}

export default Component;
