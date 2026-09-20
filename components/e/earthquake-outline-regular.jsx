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

.nz19jcivh {
  d: path("M2 10h4l3 -3 3 3 3 -3 3 3h4");
}

.ov7kkt0lo {
  d: path("m8 17 4 4 4 -4");
}

.vxy4ztabh {
  d: path("M4 14h16");
}
</style><g class="nrj6p8qat"><path class="nz19jcivh"/><path class="ov7kkt0lo"/><path class="vxy4ztabh"/></g>`,
		"fallback": "iconmind:earthquake-outline-regular",
	});
}

export default Component;
