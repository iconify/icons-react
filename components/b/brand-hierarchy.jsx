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
		"content": `<style>.fhthfqbjo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.125 2.5h1.75A2.625 2.625 0 0 1 15.5 5.125v.25A2.625 2.625 0 0 1 12.875 8h-1.75A2.625 2.625 0 0 1 8.5 5.375v-.25A2.625 2.625 0 0 1 11.125 2.5m-6 13.5h1.75A2.625 2.625 0 0 1 9.5 18.625v.25A2.625 2.625 0 0 1 6.875 21.5h-1.75A2.625 2.625 0 0 1 2.5 18.875v-.25A2.625 2.625 0 0 1 5.125 16m12 0h1.75a2.625 2.625 0 0 1 2.625 2.625v.25a2.625 2.625 0 0 1-2.625 2.625h-1.75a2.625 2.625 0 0 1-2.625-2.625v-.25A2.625 2.625 0 0 1 17.125 16M12 8v4m-6 4v-4h12v4");
}
</style><path class="fhthfqbjo"/>`,
		"fallback": "uix:brand-hierarchy",
	});
}

export default Component;
