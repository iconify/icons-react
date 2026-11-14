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
		"content": `<style>.ftyzidbiz {
  d: path("M12.8 20.5H3.5V5h17v7.9M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 9.5h17");
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}

.o526cq8lq {
  d: path("M20.75 18.5A2.75 2.75 0 1 1 18 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ftyzidbiz"/><path class="o526cq8lq"/><path class="is8nqnbzt"/></g>`,
		"fallback": "uix-sharp:delivery-reschedule",
	});
}

export default Component;
