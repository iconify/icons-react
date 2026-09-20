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
		"content": `<style>.eefkjlb0g {
  fill: var(--svg-color--d91023, #d91023);
  d: path("M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.uu8btdbmm {
  fill: var(--svg-color--d91023, #d91023);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}

.xpy8sjkzl {
  fill: var(--svg-color--eee, #eee);
  d: path("M12 5h12v26H12z");
}
</style><path class="uu8btdbmm"/><path class="xpy8sjkzl"/><path class="eefkjlb0g"/>`,
		"fallback": "twemoji:flag-for-flag-peru",
	});
}

export default Component;
