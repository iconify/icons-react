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
		"content": `<style>.dg5b0qqyz {
  d: path("M3.5 3.5h17v17h-17Zm4 4.5h9M12 5v13.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umey0ho2h {
  d: path("M12 12c-1.5 3-3 4.5-5 5.5m5-5.5c1.5 3 3 4.5 5 5.5");
}
</style><g class="ulnmmdpxh"><path class="dg5b0qqyz"/><path class="umey0ho2h"/></g>`,
		"fallback": "uix-sharp:chinese-characters",
	});
}

export default Component;
