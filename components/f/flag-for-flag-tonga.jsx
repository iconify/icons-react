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
		"content": `<style>.awvlfjbua {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-5.9 2.631V32H4C4 18.585 13.484 7.349 26.1 4.631");
}

.nz_9rgq5n {
  fill: currentColor;
  d: path("M17.25 13.316h-3.934v4.917H8.4v3.934h4.916v4.916h3.934v-4.916h4.917v-3.934H17.25z");
}
</style><path class="nz_9rgq5n"/><path class="awvlfjbua"/>`,
		"fallback": "emojione-monotone:flag-for-flag-tonga",
	});
}

export default Component;
