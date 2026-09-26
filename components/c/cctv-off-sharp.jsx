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
		"content": `<style>.yt6y7e71h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.8937 12.8937L4.47 9.4903L5.9147 5.9147M8.7904 3.6861L17.2913 7.1207L15.6178 11.2628M16.5421 8.9751L21.0001 8.6191L18.6905 14.3355M6.788 10.4269L6.788 17L3 17M3 12L3 22M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="yt6y7e71h"/>`,
		"fallback": "keyline-icons:cctv-off-sharp",
	});
}

export default Component;
