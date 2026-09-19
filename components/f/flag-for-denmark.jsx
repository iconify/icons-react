import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ik8-3_bxu {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M64 43c0 6.075-3.373 11-10 11H10C3.373 54 0 49.075 0 43V21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z");
}

.mh7jcc21q {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M0 27h64v8H0z");
}

.ylez0ismu {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M20 10h9v44h-9z");
}
</style><path class="ik8-3_bxu"/><path class="ylez0ismu"/><path class="mh7jcc21q"/>`,
		"fallback": "emojione-v1:flag-for-denmark",
	});
}

export default Component;
