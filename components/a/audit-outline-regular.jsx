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

.dcpsfge-d {
  d: path("m18 19 3 3");
}

.kqojuabdu {
  d: path("M16.5 12.29a4 4 0 1 1 -3 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="kqojuabdu"/><path class="dcpsfge-d"/></g>`,
		"fallback": "iconmind:audit-outline-regular",
	});
}

export default Component;
