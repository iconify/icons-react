import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":262};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kex82abfu {
  fill: var(--svg-color--7950ed, #7950ed);
  d: path("M0 130.519c0 67.317 49.315 122.613 112.77 130.34V.178C49.314 7.904 0 63.2 0 130.519m256-.006C256 62.853 206.18 7.213 142.053 0v261.199h113.78v-127.08c.167-1.201.167-2.403.167-3.606");
}
</style><path class="kex82abfu"/>`,
		"fallback": "logos:amplication-icon",
	});
}

export default Component;
