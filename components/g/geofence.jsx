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
		"content": `<style>.a4sqm4byg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 11h.01");
}

.dgwcnsb5f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.88 3.66l.97-.42q1.15-.49 2.24.13l1.98 1.14m2.61 1.48l1.98 1.14q1.09.62.94 1.86l-.29 2.4m-.37 2.97l-.29 2.4q-.15 1.24-1.34 1.61l-2.63.81m-2.86.89l-2.63.81q-1.19.37-1.93-.63l-1.24-1.67m-1.79-2.41L3.99 14.5q-.74-1-.46-2.22l.26-1.19m.67-2.93l.26-1.19Q5 5.75 6.15 5.26l.97-.42M12 16.5c-.2 0-.4-.08-.55-.22c-1.7-1.68-3.2-3.38-3.2-5.28a3.75 3.75 0 0 1 7.5 0c0 1.9-1.5 3.6-3.2 5.28c-.15.14-.35.22-.55.22");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="dgwcnsb5f"/><path class="a4sqm4byg"/></g>`,
		"fallback": "iconoven:geofence",
	});
}

export default Component;
