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
		"content": `<style>.cqb78j2rt {
  d: path("M17.598 7.5C18.753 5.5 17.31 3 15 3a3 3 0 0 0-3 3m5.956.511a4 4 0 0 1 1.87 4.658M17 18a4 4 0 0 0 2-7.464m.986 6.126A4 4 0 1 1 12 17M6.402 7.5C5.247 5.5 6.69 3 9 3a3 3 0 0 1 3 3m-5.956.511a4 4 0 0 0-1.87 4.658M7 18a4 4 0 0 1-2-7.464m-.986 6.126A4 4 0 1 0 12 17");
}

.f19ze5brw {
  stroke-opacity: 0.4;
  d: path("M12 6v11m-3-3a5 5 0 0 0 3-4a5 5 0 0 0 3 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="f19ze5brw"/><path class="cqb78j2rt"/></g>`,
		"fallback": "coolicons:brain-duocolor-sharp",
	});
}

export default Component;
