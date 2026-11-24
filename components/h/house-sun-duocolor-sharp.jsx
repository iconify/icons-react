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
		"content": `<style>.ftdlqzbwe {
  stroke-opacity: 0.4;
  d: path("M11 13a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5 0h.5m-1.672 2.828l.354.354M12 17v.5m-2.828-1.672l-.354.354M8 13h-.5m1.672-2.828l-.354-.354M12 9v-.5m2.828 1.672l.354-.354");
}

.is_4m5cif {
  d: path("m12 3l8 7v11H4V10z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ftdlqzbwe"/><path class="is_4m5cif"/></g>`,
		"fallback": "coolicons:house-sun-duocolor-sharp",
	});
}

export default Component;
