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
		"content": `<style>.e1es0gbnt {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M8 29h2v2H8zm0-8h2v2H8zm-2 4h2v2H6zM16 9h2v2h-2zm0 4h2v2h-2zm-2 4h2v2h-2zm10 1h2v2h-2zm-2 4h2v2h-2zm-2 6h2v2h-2zm9-16h2v2h-2zm0 4h2v2h-2z");
}

.n407rwkwa {
  fill: var(--svg-color--292f33, #292f33);
  d: path("M28 17c0-1-1-1-1-1h-8c-1 0-1 1-1 1v19h10zm-17 2H6v-5s0-1-1-1H0v19a4 4 0 0 0 4 4h8V20s0-1-1-1m21 6c-1 0-1 1-1 1v10h1a4 4 0 0 0 4-4v-7z");
}

.pe920hbww {
  fill: var(--svg-color--485359, #485359);
  d: path("M10 36V7l4-4h2l4 4v29zm23-25c0-1-1-1-1-1h-7s-1 0-1 1v25h9z");
}

.xdm0zvb_i {
  fill: var(--svg-color--f4900c, #f4900c);
  d: path("M32 0H4a4 4 0 0 0-4 4v22h36V4a4 4 0 0 0-4-4");
}
</style><path class="xdm0zvb_i"/><path class="pe920hbww"/><path class="n407rwkwa"/><path class="e1es0gbnt"/>`,
		"fallback": "twemoji:cityscape-at-dusk",
	});
}

export default Component;
