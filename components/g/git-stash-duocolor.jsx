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
		"content": `<style>.eur1wbg9u {
  stroke-opacity: 0.4;
  d: path("M12 8v7m-3-3l3 3l3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.srtphi00w {
  d: path("M10 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-7 8v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5");
}
</style><g class="nrj6p8qat"><path class="eur1wbg9u"/><path class="srtphi00w"/></g>`,
		"fallback": "coolicons:git-stash-duocolor",
	});
}

export default Component;
