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
		"content": `<style>.cfjh0bb9c {
  d: path("m12 12.5l-2.25 2.25H13L10.75 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z6v_7kbuh {
  d: path("M2.5 9.75H19v10H2.5Zm19.25 3.75V16M2.5 4.5a3.25 1.5 0 1 0 6.5 0a3.25 1.5 0 1 0-6.5 0Zm10 0a3.25 1.5 0 1 0 6.5 0a3.25 1.5 0 1 0-6.5 0ZM5.75 6v3.75m10-3.75v3.75");
}
</style><g class="ulnmmdpxh"><path class="z6v_7kbuh"/><path class="cfjh0bb9c"/></g>`,
		"fallback": "uix-sharp:drone-battery",
	});
}

export default Component;
