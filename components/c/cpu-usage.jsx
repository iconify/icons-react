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
		"content": `<style>.d88pmqbfu {
  d: path("M8.5 13a3.5 3.5 0 0 1 7 0M12 13l2-2.25");
}

.dp48jcbwg {
  d: path("M5.5 5.5h13v13h-13Zm4-3v3m5-3v3m-5 13v3m5-3v3m-12-12h3m-3 5h3m13-5h3m-3 5h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dp48jcbwg"/><path class="d88pmqbfu"/></g>`,
		"fallback": "uix-sharp:cpu-usage",
	});
}

export default Component;
