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
		"content": `<style>.a_d14drdr {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.787 22.167h52.426A27.9 27.9 0 0 1 60 32c0 3.459-.635 6.771-1.787 9.834H5.787A27.9 27.9 0 0 1 4 32c0-3.459.635-6.772 1.787-9.833");
}

.ixfggn3xi {
  cx: 32px;
  cy: 32px;
  r: 7.867px;
  fill: currentColor;
}
</style><circle class="ixfggn3xi"/><path class="a_d14drdr"/>`,
		"fallback": "emojione-monotone:flag-for-flag-niger",
	});
}

export default Component;
