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
		"content": `<style>.jwbs-piju {
  fill: currentColor;
  d: path("M4 15L20 15C20 19.4183 16.4183 23 12 23C7.5817 23 4 19.4183 4 15Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vdv47vfaw {
  d: path("M8 2L16 2");
}

.zlxex4bvv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M10.5 1L13.5 1C14.6046 1 15.5 1.8954 15.5 3L15.5 7.8063C18.2529 9.1456 20 11.9386 20 15C20 19.4183 16.4183 23 12 23C7.5817 23 4 19.4183 4 15C4 11.9386 5.7471 9.1456 8.5 7.8063L8.5 3C8.5 1.8954 9.3954 1 10.5 1Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zlxex4bvv"/><path class="jwbs-piju"/><path class="vdv47vfaw"/></g>`,
		"fallback": "keyline-icons:flask-round-duotone",
	});
}

export default Component;
