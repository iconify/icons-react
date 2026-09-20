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

.aum97lbyp {
  d: path("M9 13h4");
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uesvxd39h {
  d: path("M15 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.x3sflacnk {
  d: path("M9 18h6");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="jlfjgzbqx"/><path class="aum97lbyp"/><path class="x3sflacnk"/><path class="uesvxd39h"/></g>`,
		"fallback": "iconmind:billing-outline-regular",
	});
}

export default Component;
