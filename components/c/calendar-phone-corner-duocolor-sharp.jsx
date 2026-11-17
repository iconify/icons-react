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
		"content": `<style>.g4njagb-z {
  d: path("M9 21H4V5h16v4M8 3v2m8-2v2M4 9h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oa38ceb-j {
  stroke-opacity: 0.4;
  d: path("M13 13.889V13h2.667l.889 2.222l-1.334 1.334l2.222 2.222l1.334-1.334l2.222.89V21h-.889A7.11 7.11 0 0 1 13 13.889");
}
</style><g class="nrj6p8qat"><path class="oa38ceb-j"/><path class="g4njagb-z"/></g>`,
		"fallback": "coolicons:calendar-phone-corner-duocolor-sharp",
	});
}

export default Component;
