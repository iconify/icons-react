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
		"content": `<style>.tkubwdq9r {
  d: path("M2.75 20.25V6.85l.85-.3Q9 4.5 14.25 4.75H15V8.5h3.5v3.75h2.75v9H2.75zm0-5.75h18.5");
}

.uoql0_b5t {
  d: path("M5.75 11.5V8.75h3v2.75Zm6 0V8.75h3v2.75Zm-6 9.75V17.5h4v3.75m4.5 0V17.5h4v3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tkubwdq9r"/><path class="uoql0_b5t"/></g>`,
		"fallback": "iconoven:colosseum-sharp",
	});
}

export default Component;
