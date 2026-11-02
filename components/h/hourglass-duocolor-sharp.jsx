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

.wew2rgbhy {
  d: path("M7 3v4l5 5l-5 5v4M17 3v4l-5 5l5 5v4");
}

.yvebdkb2o {
  stroke-opacity: 0.4;
  d: path("M5 3h14M5 21h14");
}
</style><g class="nrj6p8qat"><path class="yvebdkb2o"/><path class="wew2rgbhy"/></g>`,
		"fallback": "coolicons:hourglass-duocolor-sharp",
	});
}

export default Component;
