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
		"content": `<style>.a0z9iab1m {
  d: path("M14 2h2.5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3V5a3 3 0 0 1 3 -3H10");
}

.drjiz3bcf {
  d: path("M12 21h2.5");
}

.e2nq-yvbg {
  d: path("M12 15v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s76tmubfa {
  d: path("M9 5.5h6l-6 6h6");
}

.xidycypec {
  d: path("M12 18h3");
}
</style><g class="nrj6p8qat"><path class="a0z9iab1m"/><path class="e2nq-yvbg"/><path class="xidycypec"/><path class="drjiz3bcf"/><path class="s76tmubfa"/></g>`,
		"fallback": "iconmind:dormant-key-outline-regular",
	});
}

export default Component;
