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
		"content": `<style>.n3mnfccii {
  d: path("M2.5 3.5h19v13h-19Zm4.5 13V21m10-4.5V21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zggda-2nd {
  d: path("M6 10a2 3 0 1 0 4 0a2 3 0 1 0-4 0Zm8 0a2 3 0 1 0 4 0a2 3 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="n3mnfccii"/><path class="zggda-2nd"/></g>`,
		"fallback": "uix-sharp:innings-scoreboard",
	});
}

export default Component;
