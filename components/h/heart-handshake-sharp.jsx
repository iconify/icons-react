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
		"content": `<style>.hup1egbnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7c-2-4-9-4-9 2s9 11 9 11s9-5 9-11s-7-6-9-2m0 0l-3 3a2.121 2.121 0 1 0 3 3l1-1a2.83 2.83 0 0 1 4 0l2 2m-4.25 1.25l1.617 1.617M11.5 17.5l1.737 1.737");
}
</style><path class="hup1egbnk"/>`,
		"fallback": "coolicons:heart-handshake-sharp",
	});
}

export default Component;
