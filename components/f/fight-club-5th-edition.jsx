import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ciq6yubaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30 10l-15.1 1.8l-6 14m30.2-3.6L30 10M18 38l15.1-1.8l6-14M8.9 25.8L18 38");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rchuuhbhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.1 22.2l-11.4-6.8l-12.8-3.6l-.3 13.3L18 38m0 0l11.6-6.4l9.5-9.4");
}

.usc9djope {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.6 31.6l-15-6.5l13.1-9.7zM8.9 25.8l5.7-.7m13.1-9.7L30 10m3.1 26.2l-3.5-4.6");
}
</style><circle class="cpk0fnbgt"/><path class="ciq6yubaq"/><path class="rchuuhbhb"/><path class="usc9djope"/>`,
		"fallback": "arcticons:fight-club-5th-edition",
	});
}

export default Component;
