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
		"content": `<style>.c2pbmbb6m {
  d: path("M12 2L21 6.8809L21 17.1191L12 22L3 17.1191L3 6.8809L12 2Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-er94b8t {
  d: path("M12 6.5504L17 9.262L17 14.738L12 17.4496L7 14.738L7 9.262L12 12Z");
}
</style><g class="gp_8x1bzb"><path class="c2pbmbb6m"/><path class="o-er94b8t"/></g>`,
		"fallback": "keyline-icons:hexagon-five-sixth-sharp",
	});
}

export default Component;
