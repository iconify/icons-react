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
		"content": `<style>.np1yprb6g {
  d: path("M12.2 18.5H2.5v-13h19v6.2M6 9.5h5.5m-5.5 5h3.5");
}

.r3iehij3h {
  d: path("M15 14.5h6v7.25h-6Zm3 2.5h.01m-1.26 2.5h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="np1yprb6g"/><path class="r3iehij3h"/></g>`,
		"fallback": "uix-sharp:cheque-payroll",
	});
}

export default Component;
