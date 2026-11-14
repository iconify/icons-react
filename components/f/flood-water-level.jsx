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
		"content": `<style>.enll7tbnf {
  d: path("M13.5 2.5h5v19h-5Zm0 3.5H16m-2.5 3.5H16");
}

.hpmardb4h {
  d: path("M2.5 14.5c1.58-1.25 3.17-1.25 4.75 0s3.17 1.25 4.75 0s3.17-1.25 4.75 0s3.17 1.25 4.75 0m-19 4c1.58-1.25 3.17-1.25 4.75 0s3.17 1.25 4.75 0s3.17-1.25 4.75 0s3.17 1.25 4.75 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="enll7tbnf"/><path class="hpmardb4h"/></g>`,
		"fallback": "uix-sharp:flood-water-level",
	});
}

export default Component;
