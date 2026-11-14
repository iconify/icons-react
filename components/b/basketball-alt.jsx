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
		"content": `<style>.h_z5eeykk {
  d: path("M12 2.5c-.25 5-4.5 9.25-9.5 9.5m9.5 9.5c.25-5 4.5-9.25 9.5-9.5");
}

.irft8w7vr {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm16.218-6.718L5.282 18.718m0-13.436l13.436 13.436");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="irft8w7vr"/><path class="h_z5eeykk"/></g>`,
		"fallback": "uix-sharp:basketball-alt",
	});
}

export default Component;
