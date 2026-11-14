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
		"content": `<style>.fdnlxcc3s {
  d: path("m2.5 14.5l9.5-6l9.5 6l-9.5 6Z");
}

.rnxct9jcs {
  d: path("M2.5 14.5V10L12 4l9.5 6v4.5M12 4v4.5m-4.75 3l4.75 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fdnlxcc3s"/><path class="rnxct9jcs"/></g>`,
		"fallback": "uix-sharp:floor-plan-3d",
	});
}

export default Component;
