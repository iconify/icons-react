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
		"content": `<style>.l-y44uqzt {
  d: path("m12.586 2.757l5.657 5.657l-2.829 2.829l-5.657-5.657ZM12.5 8.5l-8.25 8.25M2.5 20.5H11m3.75-5.25a3.25 1.25 0 1 0 6.5 0a3.25 1.25 0 1 0-6.5 0Z");
}

.nynzlpb7q {
  d: path("M14.75 15.25v5c0 .75 1.5 1.25 3.25 1.25s3.25-.5 3.25-1.25v-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l-y44uqzt"/><path class="nynzlpb7q"/></g>`,
		"fallback": "uix-sharp:data-governance",
	});
}

export default Component;
