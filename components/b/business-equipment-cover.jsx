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
		"content": `<style>.b95_8nb5x {
  d: path("M7.5 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm10.5 5L21 16v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V16Z");
}

.m9l2pjboo {
  d: path("m8.645 4.618l.173-1.806h1.864l.173 1.806l1.743.722l1.399-1.155l1.318 1.318l-1.155 1.399l.722 1.743l1.806.173v1.864l-1.806.173l-.722 1.743l1.155 1.399l-1.318 1.318l-1.399-1.155l-1.743.722l-.173 1.806H8.818l-.173-1.806l-1.743-.722l-1.399 1.155l-1.318-1.318l1.155-1.399l-.722-1.743l-1.806-.173V8.818l1.806-.173l.722-1.743l-1.155-1.399l1.318-1.318L6.902 5.34Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m9l2pjboo"/><path class="b95_8nb5x"/></g>`,
		"fallback": "uix-sharp:business-equipment-cover",
	});
}

export default Component;
