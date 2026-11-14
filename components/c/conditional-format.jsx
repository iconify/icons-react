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
		"content": `<style>.fpiqv69lh {
  d: path("m15.5 15l5 3l-5 3");
}

.reedby-_m {
  fill: currentColor;
  d: path("M3 9V5a2 2 0 0 1 2-2h4v6Zm9.2 6H9V9h6v2.4");
}

.u64jwx10x {
  d: path("M12.2 21H3V3h18v12M9 3v18m6-18v8.4M3 9h18M3 15h9.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u64jwx10x"/><path class="reedby-_m"/><path class="fpiqv69lh"/></g>`,
		"fallback": "uix-sharp:conditional-format",
	});
}

export default Component;
