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

.jpf4_0b1i {
  d: path("M9 12h5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zy1jzxj5t {
  d: path("M12.5 9.5 15 12l-2.5 2.5");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="jpf4_0b1i"/><path class="zy1jzxj5t"/></g>`,
		"fallback": "iconmind:document-output-outline-bold",
	});
}

export default Component;
