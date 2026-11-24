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
		"content": `<style>.a91ut1bon {
  d: path("m12 3l9 4H3zM5 21v-4h14v4M3 21h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o2yt9o3rn {
  stroke-opacity: 0.4;
  d: path("M7 7v10m5-10v10m5-10v10");
}
</style><g class="nrj6p8qat"><path class="o2yt9o3rn"/><path class="a91ut1bon"/></g>`,
		"fallback": "coolicons:courthouse-duocolor-sharp",
	});
}

export default Component;
