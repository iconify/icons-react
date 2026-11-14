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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wc3iedi8f {
  d: path("M6.5 18.75L12 12l5.5 6.75M12 12l-2 6.75");
}

.ze49ik-av {
  d: path("M3 4.5h18v17H3Zm5-2v4m8-4v4M3 9h18");
}
</style><g class="ulnmmdpxh"><path class="ze49ik-av"/><path class="wc3iedi8f"/></g>`,
		"fallback": "uix-sharp:camp-reservation",
	});
}

export default Component;
