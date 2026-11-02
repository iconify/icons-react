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
		"content": `<style>.fs89iqu4z {
  d: path("m17 17l-5 5L2 12L12 2l10 10z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o_xv2lbek {
  stroke-opacity: 0.4;
  d: path("M12 8h.01M12 11v4");
}
</style><g class="nrj6p8qat"><path class="o_xv2lbek"/><path class="fs89iqu4z"/></g>`,
		"fallback": "coolicons:diamond-info-duocolor-sharp",
	});
}

export default Component;
