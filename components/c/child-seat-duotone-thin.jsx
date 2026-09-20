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
		"content": `<style>.dhw73cmjs {
  d: path("M6 21V6l3 -3h7v12h3v6");
}

.gju2vx3wu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 21V6l3 -3h7v12h3v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mwny3bbtr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 15h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.phi1ncbih {
  d: path("M6 15h10");
}
</style><g class="hntgybcog"><path class="gju2vx3wu"/><path class="mwny3bbtr"/><path class="dhw73cmjs"/><path class="phi1ncbih"/></g>`,
		"fallback": "iconmind:child-seat-duotone-thin",
	});
}

export default Component;
