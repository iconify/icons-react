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
		"content": `<style>.ojmdx_bwl {
  d: path("M11.6 18.25H4v-16h12.5v6.4M7 6.25h6m-6 3.5h4");
}

.ovdfh3bwn {
  d: path("M15 17.5v3.25l1.5-1l1.5 1V17.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wg72yabzp {
  d: path("M13.25 14.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="ojmdx_bwl"/><path class="wg72yabzp"/><path class="ovdfh3bwn"/></g>`,
		"fallback": "uix-sharp:document-seal-ribbon",
	});
}

export default Component;
