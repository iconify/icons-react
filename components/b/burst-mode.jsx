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
		"content": `<style>.ch--8sbwi {
  d: path("M5.5 17V9a2 2 0 0 1 2-2H18");
}

.izj9bug5u {
  d: path("M2.5 14V6a2 2 0 0 1 2-2H15");
}

.lt1bb-bwp {
  d: path("M12.5 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.o5q2wfbsw {
  d: path("M8.5 10H21v10H8.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="izj9bug5u"/><path class="ch--8sbwi"/><path class="o5q2wfbsw"/><path class="lt1bb-bwp"/></g>`,
		"fallback": "uix-sharp:burst-mode",
	});
}

export default Component;
