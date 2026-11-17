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

.pi7p2pb7q {
  stroke-opacity: 0.4;
  d: path("M12 8a1.5 1.5 0 0 1 1.5 1.5v4.373A2.25 2.25 0 0 1 12 17.8M12 8a1.5 1.5 0 0 0-1.5 1.5v4.373A2.25 2.25 0 0 0 12 17.8");
}

.uvkzl2wgg {
  d: path("M12 21H6a2 2 0 0 1-2-2v-8.092a2 2 0 0 1 .683-1.506l6-5.25a2 2 0 0 1 2.634 0l6 5.25A2 2 0 0 1 20 10.908V19a2 2 0 0 1-2 2z");
}
</style><g class="nrj6p8qat"><path class="pi7p2pb7q"/><path class="uvkzl2wgg"/></g>`,
		"fallback": "coolicons:house-thermometer-duocolor",
	});
}

export default Component;
