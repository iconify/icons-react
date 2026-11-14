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
		"content": `<style>.rvy1sbcos {
  d: path("M12.164 20H4V2.5h9.5L18 7v4.936");
}

.su9clsbyh {
  d: path("M7 7.5h6.5V14H7Zm8 10h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rvy1sbcos"/><path class="su9clsbyh"/></g>`,
		"fallback": "uix-sharp:carrier-unlock",
	});
}

export default Component;
