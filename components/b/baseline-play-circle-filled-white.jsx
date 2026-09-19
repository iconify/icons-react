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
		"content": `<style>.lmk3vhwxs {
  fill: currentColor;
  d: path("M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10s10-4.475 10-10S17.525 2 12 2m-2 14.5v-9l6 4.5z");
}
</style><path class="lmk3vhwxs"/>`,
		"fallback": "ic:baseline-play-circle-filled-white",
	});
}

export default Component;
