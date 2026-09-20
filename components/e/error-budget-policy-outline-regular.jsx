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

.ayfcapvsy {
  d: path("M9 13a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.iyj_k-bwo {
  d: path("M12 11v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="ayfcapvsy"/><path class="iyj_k-bwo"/></g>`,
		"fallback": "iconmind:error-budget-policy-outline-regular",
	});
}

export default Component;
