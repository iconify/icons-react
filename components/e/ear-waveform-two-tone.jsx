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

.wgl8w-dbv {
  stroke-opacity: 0.4;
  d: path("M4 9C4 5.134 7.134 2 11 2C14.866 2 18 5.134 18 9M10 22C8.3431 22 7 20.6569 7 19");
}

.wqpg91bpg {
  d: path("M13.5 9C13.5 7.6193 12.3807 6.5 11 6.5C9.6193 6.5 8.5 7.6193 8.5 9L8.5 11M12 15L12 18M16 13L16 20M20 15L20 18");
}
</style><g class="nrj6p8qat"><path class="wgl8w-dbv"/><path class="wqpg91bpg"/></g>`,
		"fallback": "keyline-icons:ear-waveform-two-tone",
	});
}

export default Component;
