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
		"content": `<style>.dkqamo3la {
  d: path("M8 13.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.n-72-2i3a {
  d: path("M3 19.5V8l6-3.5V8l6-3.5V8l6-3.5v15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrfa8fz1m {
  d: path("M12 11v2.5h2");
}
</style><g class="ulnmmdpxh"><path class="n-72-2i3a"/><path class="dkqamo3la"/><path class="xrfa8fz1m"/></g>`,
		"fallback": "uix-sharp:factory-clock",
	});
}

export default Component;
