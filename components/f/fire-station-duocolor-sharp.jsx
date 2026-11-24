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
		"content": `<style>.l68q8hb1r {
  d: path("M3 21V3h18v18M3 21h18M6 21v-4h4v4m4 0v-4h4v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o0rmx6bwa {
  stroke-opacity: 0.4;
  d: path("M12 6c.225 1.125.9 2.025 1.8 2.7c.675.675.9 1.575.9 2.7a2.7 2.7 0 1 1-5.4 0c0-.675.225-1.125.45-1.35m0 0a.9.9 0 1 0 1.8 0c0-.675-.225-.9-.45-1.35c-.45-.9-.225-1.8.9-2.7");
}
</style><g class="nrj6p8qat"><path class="o0rmx6bwa"/><path class="l68q8hb1r"/></g>`,
		"fallback": "coolicons:fire-station-duocolor-sharp",
	});
}

export default Component;
