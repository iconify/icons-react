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
		"content": `<style>.bimnh7byq {
  d: path("M5.5 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj9_-kb4f {
  d: path("m10.5 7l1.75 2.75h-3.5Zm8 .5v9");
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="bimnh7byq"/><path class="wj9_-kb4f"/></g>`,
		"fallback": "uix-sharp:dj-cue",
	});
}

export default Component;
