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
		"content": `<style>.icg46ikti {
  d: path("M9.5 12 7 14.5 9.5 17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.vshgwuurx {
  d: path("m14.5 12 2.5 2.5 -2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="nzpsuduik"/><path class="vhnbtvbtn"/><path class="icg46ikti"/><path class="vshgwuurx"/></g>`,
		"fallback": "iconmind:embed-outline-regular",
	});
}

export default Component;
