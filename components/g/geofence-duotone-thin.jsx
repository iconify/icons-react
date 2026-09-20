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
		"content": `<style>.a2wn47b0j {
  fill: currentColor;
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dahm9hfll {
  fill: currentColor;
  d: path("M13 11h9v5.5L17.5 21 13 16.5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f6561xx5n {
  d: path("M7 11v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.psf2kha1z {
  d: path("M13 11h9v5.5L17.5 21 13 16.5Z");
}
</style><g class="hntgybcog"><path class="a2wn47b0j"/><path class="dahm9hfll"/><path class="myekf3bzc"/><path class="f6561xx5n"/><path class="psf2kha1z"/></g>`,
		"fallback": "iconmind:geofence-duotone-thin",
	});
}

export default Component;
