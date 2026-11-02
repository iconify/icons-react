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
		"content": `<style>.ieqnmm3zq {
  stroke-opacity: 0.4;
  d: path("M8 11a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-1 8c0-1.105 1.343-2 3-2s3 .895 3 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xcyvmdbtb {
  d: path("M3 5h18v14H3Zm12 6h3m-4 4h4");
}
</style><g class="nrj6p8qat"><path class="ieqnmm3zq"/><path class="xcyvmdbtb"/></g>`,
		"fallback": "coolicons:id-card-duocolor-sharp",
	});
}

export default Component;
