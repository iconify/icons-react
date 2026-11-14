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
		"content": `<style>.o69cgybzd {
  d: path("M12 7.5a2 2 0 0 1 0-4m0 7v11m-4.5 0L12 17l4.5 4.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xubb8eblu {
  d: path("M2.5 8a9.5 2.5 0 1 0 19 0a9.5 2.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="xubb8eblu"/><path class="o69cgybzd"/></g>`,
		"fallback": "uix-sharp:cymbal",
	});
}

export default Component;
