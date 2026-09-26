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

.rdaefybbb {
  stroke-opacity: 0.4;
  d: path("M4 11.1093L4 6C4 3.7909 5.7909 2 8 2L16 2C18.2091 2 20 3.7909 20 6L20 11.1093");
}

.yj0rwwbzi {
  d: path("M12 21.2307L12 11.1093M6.5 16.17L11.6314 21.8359C11.8296 22.0547 12.1704 22.0547 12.3686 21.8359L17.5 16.17");
}
</style><g class="nrj6p8qat"><path class="rdaefybbb"/><path class="yj0rwwbzi"/></g>`,
		"fallback": "keyline-icons:bracket-arrow-down-duotone",
	});
}

export default Component;
