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
		"content": `<style>.lqbnaxb5t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.461 5.95l-3.316 5.613A1.284 1.284 0 0 0 12.25 13.5h.443a1.5 1.5 0 0 1 1.474 1.776L13.75 17.5a.853.853 0 0 0 1.543.637l3.939-5.778a1.189 1.189 0 0 0-.982-1.859h-.653A1.5 1.5 0 0 1 16.1 8.906l.15-2.406a.962.962 0 0 0-1.789-.55M4 8h5.5M3 12h4.5m-3 4h4");
}
</style><path class="lqbnaxb5t"/>`,
		"fallback": "uix:flash-rear-curtain",
	});
}

export default Component;
