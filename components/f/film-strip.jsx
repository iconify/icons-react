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
		"content": `<style>.z15-k6fjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18v19H3Zm4.5 0v19m9-19v19M3 12h18M3 7h4.5M3 17h4.5m9-10H21m-4.5 10H21");
}
</style><path class="z15-k6fjw"/>`,
		"fallback": "uix-sharp:film-strip",
	});
}

export default Component;
