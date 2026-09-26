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
		"content": `<style>.dd9b8t23u {
  d: path("M8 12H15.6993M12.1063 8L15.8497 11.6464C16.0501 11.8417 16.0501 12.1583 15.8497 12.3536L12.1063 16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tx_ah59as {
  d: path("M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z");
}
</style><g class="nrj6p8qat"><path class="tx_ah59as"/><path class="dd9b8t23u"/></g>`,
		"fallback": "keyline-icons:circle-arrow-right",
	});
}

export default Component;
