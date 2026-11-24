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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rot-lsb9m {
  d: path("M3 21h18M9 21V3h6v18M12 7h.01M12 11h.01M12 15h.01M6 13h.01M6 17h.01M18 17h.01");
}

.xyuoj5b4g {
  stroke-opacity: 0.4;
  d: path("M9 9H3v12m12-8h6v8");
}
</style><g class="nrj6p8qat"><path class="xyuoj5b4g"/><path class="rot-lsb9m"/></g>`,
		"fallback": "coolicons:city-duocolor-sharp",
	});
}

export default Component;
