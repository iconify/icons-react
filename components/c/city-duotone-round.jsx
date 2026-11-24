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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.msrv7ubdz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M9 21V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16M12 7h.01M12 11h.01M12 15h.01M6 13h.01M6 17h.01M18 17h.01M9 9H5a2 2 0 0 0-2 2v10m12-8h4a2 2 0 0 1 2 2v6");
}

.ovob2xbti {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 21V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16Z");
}
</style><g class="ft5dv1b6b"><path class="ovob2xbti"/><path class="msrv7ubdz"/></g>`,
		"fallback": "coolicons:city-duotone-round",
	});
}

export default Component;
