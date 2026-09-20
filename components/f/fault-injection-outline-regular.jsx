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
		"content": `<style>.amujw3_wp {
  d: path("m9.5 13 2.5 2.5 2.5 -2.5");
}

.dvgqqgmhk {
  d: path("M12 11.5v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sgjb9gifn {
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3Z");
}
</style><g class="nrj6p8qat"><path class="sgjb9gifn"/><path class="dvgqqgmhk"/><path class="amujw3_wp"/></g>`,
		"fallback": "iconmind:fault-injection-outline-regular",
	});
}

export default Component;
