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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tw7cj-bsm {
  d: path("M3 7h18v6H3zm2 6v5m14-5v5M3 18h4m10 0h4");
}

.v__x9mfys {
  stroke-opacity: 0.4;
  d: path("m3 7l6 6m0-6l6 6m0-6l6 6");
}
</style><g class="nrj6p8qat"><path class="v__x9mfys"/><path class="tw7cj-bsm"/></g>`,
		"fallback": "coolicons:barrier-duocolor-sharp",
	});
}

export default Component;
