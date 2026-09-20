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
		"content": `<style>.cd9o0g-4r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 20.37a8.5 8.5 0 0 1 0 -16.74");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ewesysbte {
  d: path("M12 20.37a8.5 8.5 0 0 1 0 -16.74");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yg16h_b6r {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 3.63a8.5 8.5 0 0 1 0 16.74");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ygpel9b0x {
  d: path("M12 3.63a8.5 8.5 0 0 1 0 16.74");
}
</style><g class="nrj6p8qat"><path class="yg16h_b6r"/><path class="cd9o0g-4r"/><path class="ygpel9b0x"/><path class="ewesysbte"/></g>`,
		"fallback": "iconmind:inner-join-duotone-regular",
	});
}

export default Component;
