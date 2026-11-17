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
		"content": `<style>.a9ai-ogdl {
  stroke-opacity: 0.4;
  d: path("M8 9V15M16 10V14");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.je03xdcdh {
  d: path("M4 10V14M12 7V17M20 9V15");
}
</style><g class="gp_8x1bzb"><path class="a9ai-ogdl"/><path class="je03xdcdh"/></g>`,
		"fallback": "keyline-icons:audio-lines-low-sharp-two-tone",
	});
}

export default Component;
