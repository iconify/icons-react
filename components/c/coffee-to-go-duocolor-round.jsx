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
		"content": `<style>.a3gf8y6yj {
  d: path("M6 7c-1 0-1.5-.2-1-1l1-2c.5-1 1-1 2-1h8c1 0 1.5 0 2 1l1 2c.5.8 0 1-1 1Zm0 0l1 12c.1 1.2.8 2 2 2h6c1.2 0 1.9-.8 2-2l1-12");
}

.i4ipbtb6x {
  stroke-opacity: 0.4;
  d: path("M7 12h10M7 16h10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i4ipbtb6x"/><path class="a3gf8y6yj"/></g>`,
		"fallback": "coolicons:coffee-to-go-duocolor-round",
	});
}

export default Component;
