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
		"content": `<style>.d92lmubry {
  fill: var(--svg-color--141414, #141414);
  d: path("M0 27.063C0 29.272 1.791 31 4 31h28c2.209 0 4-1.728 4-3.937V22H0z");
}

.tzse-8bre {
  fill: var(--svg-color--ce1126, #ce1126);
  d: path("M32 5H4C1.791 5 0 6.854 0 9.063V14h36V9.063C36 6.854 34.209 5 32 5");
}

.zut58gbmm {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 14h36v8H0z");
}
</style><path class="d92lmubry"/><path class="zut58gbmm"/><path class="tzse-8bre"/>`,
		"fallback": "twemoji:flag-for-yemen",
	});
}

export default Component;
