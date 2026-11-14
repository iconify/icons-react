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
		"content": `<style>.innil8rbj {
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w88g4d7pa {
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm5.75 9.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-11.5 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="innil8rbj"/><path class="w88g4d7pa"/></g>`,
		"fallback": "uix-sharp:ball-bearing",
	});
}

export default Component;
