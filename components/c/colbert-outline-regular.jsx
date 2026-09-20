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
		"content": `<style>.b5ic9acln {
  d: path("m15 7 5 5 -8 8 -8 -8 5 -5");
}

.de8hz-_3f {
  d: path("M15 10.5v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.skjwr0c_z {
  d: path("M9 10.5v5");
}

.xtpdjx99u {
  d: path("M12 10.5v5");
}
</style><g class="nrj6p8qat"><path class="b5ic9acln"/><path class="skjwr0c_z"/><path class="xtpdjx99u"/><path class="de8hz-_3f"/></g>`,
		"fallback": "iconmind:colbert-outline-regular",
	});
}

export default Component;
