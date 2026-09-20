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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.i7v-iobnd {
  d: path("M11.5 12.5 9 15l2.5 2.5");
}

.kd8pirhpr {
  d: path("M12.5 6.5 15 9l-2.5 2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uw80e4dke {
  d: path("M11 15h5");
}

.y-192i3fd {
  d: path("M8 9h5");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="y-192i3fd"/><path class="kd8pirhpr"/><path class="uw80e4dke"/><path class="i7v-iobnd"/></g>`,
		"fallback": "iconmind:content-negotiation-outline-regular",
	});
}

export default Component;
