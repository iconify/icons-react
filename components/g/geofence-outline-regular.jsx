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
		"content": `<style>.f6561xx5n {
  d: path("M7 11v4");
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.psf2kha1z {
  d: path("M13 11h9v5.5L17.5 21 13 16.5Z");
}
</style><g class="nrj6p8qat"><path class="myekf3bzc"/><path class="f6561xx5n"/><path class="psf2kha1z"/></g>`,
		"fallback": "iconmind:geofence-outline-regular",
	});
}

export default Component;
