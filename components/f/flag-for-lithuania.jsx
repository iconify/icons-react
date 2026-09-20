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
		"content": `<style>.do6g26bwg {
  fill: var(--svg-color--006a44, #006a44);
  d: path("M0 14h36v8H0z");
}

.r3m9_5yhm {
  fill: var(--svg-color--fdb913, #fdb913);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.sqy512b9q {
  fill: var(--svg-color--c1272d, #c1272d);
  d: path("M4 31h28a4 4 0 0 0 4-4v-5H0v5a4 4 0 0 0 4 4");
}
</style><path class="do6g26bwg"/><path class="r3m9_5yhm"/><path class="sqy512b9q"/>`,
		"fallback": "twemoji:flag-for-lithuania",
	});
}

export default Component;
