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
		"content": `<style>.gcsxd_7ft {
  d: path("M8 11a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwf9jcb2y {
  d: path("M12 8.75V11l1.75 1");
}

.vljkkricq {
  d: path("M5 18v-8a7 7 0 0 1 14 0v8Zm-1.5 3h17m-13-3v3m9-3v3");
}
</style><g class="ulnmmdpxh"><path class="vljkkricq"/><path class="gcsxd_7ft"/><path class="uwf9jcb2y"/></g>`,
		"fallback": "uix-sharp:clock-mantel",
	});
}

export default Component;
