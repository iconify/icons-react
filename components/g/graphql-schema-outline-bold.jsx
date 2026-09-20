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

.ae0h5kb0o {
  d: path("M9 15h6");
}

.kenyi_j7i {
  d: path("m12 6 3 3 -3 3 -3 -3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x3sflacnk {
  d: path("M9 18h6");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="kenyi_j7i"/><path class="ae0h5kb0o"/><path class="x3sflacnk"/></g>`,
		"fallback": "iconmind:graphql-schema-outline-bold",
	});
}

export default Component;
