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
		"content": `<style>.cj8gecc7a {
  d: path("M7 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dky0phbxv {
  d: path("M19 11v7");
}

.mmsmdzb7p {
  d: path("M14 11h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wwrb2gbkc {
  d: path("M4 8v6h10V8Z");
}
</style><g class="nrj6p8qat"><path class="wwrb2gbkc"/><path class="cj8gecc7a"/><path class="mmsmdzb7p"/><path class="dky0phbxv"/></g>`,
		"fallback": "iconmind:home-camera-outline-regular",
	});
}

export default Component;
