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
		"content": `<style>.ceowdjn6w {
  d: path("M5 21v-4h3v4m7.5 0v-5.5h3V21");
}

.ji74krb5c {
  d: path("M3 21V11l1.5-2.5h4L10 11v10Zm10 0V8l1.5-3.5h5L21 8v13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ji74krb5c"/><path class="ceowdjn6w"/></g>`,
		"fallback": "uix-sharp:competition-law",
	});
}

export default Component;
