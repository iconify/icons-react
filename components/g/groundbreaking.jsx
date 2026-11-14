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
		"content": `<style>.u3erbrmkm {
  d: path("M3 20.5q6.75-6.5 13.5 0m-14 0h19M18 3l1.237 2.013L21.25 6.25l-2.013 1.237L18 9.5l-1.237-2.013L14.75 6.25l2.013-1.237Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yt8wflbsx {
  d: path("M7.75 2.5h4v3h-4Zm2 3v5M7 10.5h5.5v5l-2.75 1.75L7 15.5Z");
}
</style><g class="ulnmmdpxh"><path class="yt8wflbsx"/><path class="u3erbrmkm"/></g>`,
		"fallback": "uix-sharp:groundbreaking",
	});
}

export default Component;
