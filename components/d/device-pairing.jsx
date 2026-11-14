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
		"content": `<style>.bq_6neist {
  d: path("m15.5 8.5l2 2l2-2m-9 9h-4v-4");
}

.edytnuw3p {
  d: path("M2.5 2.5h8v8h-8Zm11 11h8v8h-8Zm0-7h4v4");
}

.lci6zbgiv {
  d: path("m4.5 15.5l2-2l2 2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="edytnuw3p"/><path class="bq_6neist"/><path class="lci6zbgiv"/></g>`,
		"fallback": "uix-sharp:device-pairing",
	});
}

export default Component;
