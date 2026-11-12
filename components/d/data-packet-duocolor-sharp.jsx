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
		"content": `<style>.m28wfubmv {
  stroke-opacity: 0.4;
  d: path("M13 13v3m4-3v3M3 8h2m-2 4h2m-2 4h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t9ehae-0f {
  d: path("M9 5h12v14H9Zm0 4h12");
}
</style><g class="nrj6p8qat"><path class="m28wfubmv"/><path class="t9ehae-0f"/></g>`,
		"fallback": "coolicons:data-packet-duocolor-sharp",
	});
}

export default Component;
