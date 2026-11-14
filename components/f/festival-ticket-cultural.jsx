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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uofs7achq {
  d: path("M12.5 12.25za.93.93 0 0 0-.631 1.364l.006.011a.368.368 0 0 1-.5.5l-.011-.006A.93.93 0 0 0 10 14.75a.255.255 0 0 1-.5 0a.93.93 0 0 0-1.364-.631l-.011.006a.368.368 0 0 1-.5-.5l.006-.011A.93.93 0 0 0 7 12.25a.255.255 0 0 1 0-.5a.93.93 0 0 0 .631-1.364l-.006-.011a.368.368 0 0 1 .5-.5l.011.006A.93.93 0 0 0 9.5 9.25a.255.255 0 0 1 .5 0a.93.93 0 0 0 1.364.631l.011-.006a.368.368 0 0 1 .5.5l-.006.011a.93.93 0 0 0 .631 1.364a.255.255 0 0 1 0 .5");
}

.vz3vxmbjb {
  d: path("M4.5 5h10.75a1.75 1.75 0 0 0 3.5 0h.75a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.75a1.75 1.75 0 0 0-3.5 0H4.5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M17 9.5v5");
}
</style><g class="hntgybcog"><path class="vz3vxmbjb"/><path class="uofs7achq"/></g>`,
		"fallback": "uix:festival-ticket-cultural",
	});
}

export default Component;
