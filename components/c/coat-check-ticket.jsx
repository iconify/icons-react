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
		"content": `<style>.anpy3ac0z {
  d: path("M6.5 10.5L10 7h4l3.5 3.5v11h-11Z");
}

.mobwjr4or {
  d: path("M12 9.75c-6-8.25 6-8.25 0 0M9.5 15.5h5m-5 3h3");
}

.oj552expk {
  d: path("M10.5 11.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="anpy3ac0z"/><path class="oj552expk"/><path class="mobwjr4or"/></g>`,
		"fallback": "uix-sharp:coat-check-ticket",
	});
}

export default Component;
