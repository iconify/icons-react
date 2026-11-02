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
		"content": `<style>.i8ptlcpac {
  d: path("M7 7h10v10H7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sk6uw-bym {
  stroke-opacity: 0.4;
  d: path("M3 7h4m10 0h4M3 17h4m10 0h4M7 3v4m10-4v4M7 17v4m10-4v4");
}
</style><g class="nrj6p8qat"><path class="sk6uw-bym"/><path class="i8ptlcpac"/></g>`,
		"fallback": "coolicons:frame-duocolor-sharp",
	});
}

export default Component;
