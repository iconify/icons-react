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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s_ds1vq9q {
  d: path("M8 12.1063L11.6464 15.8497C11.8417 16.0501 12.1583 16.0501 12.3536 15.8497L16 12.1063M12 8V15.6993");
}

.tx_ah59as {
  d: path("M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2Z");
}
</style><g class="nrj6p8qat"><path class="tx_ah59as"/><path class="s_ds1vq9q"/></g>`,
		"fallback": "keyline-icons:circle-arrow-down",
	});
}

export default Component;
