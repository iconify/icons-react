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
		"content": `<style>.ba0e33bht {
  d: path("m7 10.25l5 2.5l5-2.5m-5 2.5v5.5");
}

.qz56hnb8q {
  d: path("M3.5 4.5h17V21h-17Zm4.5-2v4m8-4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8ynn1xmi {
  d: path("m7 10.25l5-2.5l5 2.5v5.5l-5 2.5l-5-2.5Z");
}
</style><g class="ulnmmdpxh"><path class="qz56hnb8q"/><path class="x8ynn1xmi"/><path class="ba0e33bht"/></g>`,
		"fallback": "uix-sharp:delivery-scheduled",
	});
}

export default Component;
