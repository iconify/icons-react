import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ggys4mn4a {
  fill: var(--svg-color--5dadec, #5dadec);
  d: path("M11 11a5 5 0 1 1-10 0C1 8.238 5 1 6 1s5 7.238 5 10");
}

.tg31urbgg {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18");
}

.wtvxqnsnd {
  fill: var(--svg-color--664500, #664500);
  d: path("M28.457 17.797c-.06-.135-1.499-3.297-4.457-3.297s-4.397 3.162-4.457 3.297a.503.503 0 0 0 .755.605c.012-.009 1.262-.902 3.702-.902c2.426 0 3.674.881 3.702.901a.498.498 0 0 0 .755-.604m-11 0c-.06-.135-1.499-3.297-4.457-3.297s-4.397 3.162-4.457 3.297a.499.499 0 0 0 .754.605c.013-.009 1.262-.902 3.703-.902c2.426 0 3.674.881 3.702.901a.5.5 0 0 0 .755-.604M13 28s1-4 5-4s5 4 5 4s-1-1-5-1s-5 1-5 1");
}
</style><path class="tg31urbgg"/><path class="wtvxqnsnd"/><path class="ggys4mn4a"/>`,
		"fallback": "twemoji:downcast-face-with-sweat",
	});
}

export default Component;
