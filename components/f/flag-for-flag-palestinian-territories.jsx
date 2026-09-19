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
		"content": `<style>.et355ebxt {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M20.557 41.833l-10.329 7.746a28 28 0 0 1-1.2-1.6L30.334 32L9.027 16.021q.572-.822 1.2-1.6l10.328 7.746h37.657C59.365 25.229 60 28.541 60 32s-.635 6.771-1.787 9.833z");
}
</style><path class="et355ebxt"/>`,
		"fallback": "emojione-monotone:flag-for-flag-palestinian-territories",
	});
}

export default Component;
