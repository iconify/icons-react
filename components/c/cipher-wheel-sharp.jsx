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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.do0vcyb9o {
  cx: 12px;
  cy: 12px;
  r: 5.25px;
}

.m1nix48ki {
  d: path("M12 12V8.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ynfffkbqo {
  d: path("m18.66 13.79l.97.25m-2.75 2.84l.71.71m-3.8 1.07l.25.97m-3.83-.97l-.25.97m-2.84-2.75l-.71.71m-1.07-3.8l-.97.25m.97-3.83l-.97-.25m2.75-2.84l-.71-.71m3.8-1.07l-.25-.97m3.83.97l.25-.97m2.84 2.75l.71-.71m1.07 3.8l.97-.25");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="ynfffkbqo"/><circle class="do0vcyb9o"/><path class="m1nix48ki"/></g>`,
		"fallback": "iconoven:cipher-wheel-sharp",
	});
}

export default Component;
