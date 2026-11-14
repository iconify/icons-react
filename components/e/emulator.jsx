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
		"content": `<style>.j9oj0xj6k {
  d: path("M12.2 15H2.5V3h17v5.2M11 15v4m-4 0h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjzi9_byq {
  d: path("m5.5 6l2 2l-2 2m4 0H12m3 1h6.5v11H15Z");
}
</style><g class="ulnmmdpxh"><path class="j9oj0xj6k"/><path class="vjzi9_byq"/></g>`,
		"fallback": "uix-sharp:emulator",
	});
}

export default Component;
