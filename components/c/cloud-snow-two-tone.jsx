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
		"content": `<style>.f_x2deu7l {
  stroke-opacity: 0.4;
  d: path("M5 16.874C3.2748 16.43 2 14.864 2 13C2 10.791 3.7909 9 6 9C6 5.686 8.6863 3 12 3C15.3137 3 18 5.686 18 9C20.2091 9 22 10.791 22 13C22 14.864 20.7252 16.43 19 16.874");
}

.ld7dybwop {
  d: path("M12 14V17.5M12 17.5V21M12 17.5L9 15.75M12 17.5L15 19.25M12 17.5L9 19.25M12 17.5L15 15.75");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="f_x2deu7l"/><path class="ld7dybwop"/></g>`,
		"fallback": "keyline-icons:cloud-snow-two-tone",
	});
}

export default Component;
