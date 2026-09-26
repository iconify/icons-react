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

.ox_05kl4h {
  d: path("M12 2C17.5228 2 22 6.4772 22 12C22 17.5228 17.5228 22 12 22C6.4772 22 2 17.5228 2 12C2 6.4772 6.4772 2 12 2Z");
}

.vh0pyof4v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12Z");
  stroke: none;
}

.vo64d318x {
  d: path("M15.6993 10.5H11.0797C9.37884 10.5 8 11.8431 8 13.5C8 15.1569 9.37884 16.5 11.0797 16.5H12.1063M13.1329 7.5L15.8497 10.1464C16.0501 10.3417 16.0501 10.6583 15.8497 10.8536L13.1329 13.5");
}
</style><g class="nrj6p8qat"><path class="vh0pyof4v"/><path class="ox_05kl4h"/><path class="vo64d318x"/></g>`,
		"fallback": "keyline-icons:circle-arrow-u-turn-right-two-tone",
	});
}

export default Component;
