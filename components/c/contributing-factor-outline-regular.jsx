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

.ct3cl0bsi {
  d: path("M12 12.5V17");
}

.kl155-_rt {
  d: path("m8.5 9 3.5 3.5L15.5 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="kl155-_rt"/><path class="ct3cl0bsi"/></g>`,
		"fallback": "iconmind:contributing-factor-outline-regular",
	});
}

export default Component;
