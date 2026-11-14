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
		"content": `<style>.fl4a_mzsy {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm9.5 6V6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v03i6abqq {
  d: path("M12 15.5c-2 0-3.25-1.25-3.25-3c2 0 3.25 1.25 3.25 3Zm0 0c2 0 3.25-1.25 3.25-3c-2 0-3.25 1.25-3.25 3Zm0-4c-2 0-3.25-1.25-3.25-3c2 0 3.25 1.25 3.25 3Zm0 0c2 0 3.25-1.25 3.25-3c-2 0-3.25 1.25-3.25 3Z");
}
</style><g class="ulnmmdpxh"><path class="fl4a_mzsy"/><path class="v03i6abqq"/></g>`,
		"fallback": "uix-sharp:allergen-wheat",
	});
}

export default Component;
