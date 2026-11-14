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
		"content": `<style>.jpe5aof1r {
  d: path("M8.5 21.5v-4h3v4m6.25-7.5l1.029 2.084l2.3.334l-1.665 1.623l.393 2.291l-2.057-1.082l-2.057 1.082l.393-2.291l-1.665-1.623l2.3-.334Z");
}

.ukym2_baw {
  d: path("M12.7 21.5H4.5v-19h11v9.8M8 6.5h4M8 10h4m-4 3.5h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ukym2_baw"/><path class="jpe5aof1r"/></g>`,
		"fallback": "uix-sharp:corporate-sponsor",
	});
}

export default Component;
