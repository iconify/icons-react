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
		"content": `<style>.jqxjeebqx {
  d: path("M12 4h8v2l-3 3m-3 3v6l-4 2v-8L4 6V4h2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rwv5ytb5v {
  stroke-opacity: 0.4;
  d: path("m4 2l14 14");
}
</style><g class="nrj6p8qat"><path class="rwv5ytb5v"/><path class="jqxjeebqx"/></g>`,
		"fallback": "coolicons:filter-off-duocolor-sharp",
	});
}

export default Component;
