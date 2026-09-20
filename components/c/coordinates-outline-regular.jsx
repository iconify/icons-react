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

.x26a8iq1c {
  d: path("M2 12h20");
}

.x64w0obso {
  d: path("M12 2v20");
}

.zey5ebc0a {
  d: path("M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="nrj6p8qat"><path class="zey5ebc0a"/><path class="x64w0obso"/><path class="x26a8iq1c"/></g>`,
		"fallback": "iconmind:coordinates-outline-regular",
	});
}

export default Component;
