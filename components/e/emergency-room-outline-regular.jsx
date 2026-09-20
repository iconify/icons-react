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
		"content": `<style>.cfwhgr43a {
  d: path("M4 20v-8a8 8 0 0 1 16 0v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t0-mwc0xy {
  d: path("M12 10v6");
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="nrj6p8qat"><path class="cfwhgr43a"/><path class="t0-mwc0xy"/><path class="zka_zabrc"/></g>`,
		"fallback": "iconmind:emergency-room-outline-regular",
	});
}

export default Component;
