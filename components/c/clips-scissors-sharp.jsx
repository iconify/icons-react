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
		"content": `<style>.nimtcozol {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 7.5h.01m-.01 3h.01m13.49-3h.01m-.01 3h.01");
}

.o5lymkbkg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.5h18.5v7H2.75z");
}

.uueil1pxw {
  cx: 17.5px;
  cy: 17.5px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xcbkw0s1i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 15.5L16 3.25m-.5 12.25L8 3.25");
}

.z6axribbu {
  cx: 6.5px;
  cy: 17.5px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><path class="o5lymkbkg"/><path class="nimtcozol"/><circle class="z6axribbu"/><circle class="uueil1pxw"/><path class="xcbkw0s1i"/></g>`,
		"fallback": "iconoven:clips-scissors-sharp",
	});
}

export default Component;
