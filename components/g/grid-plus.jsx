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
		"content": `<style>.gnrxnbuoe {
  d: path("M12.4 20.788L12 21l-8.5-4.5v-9L12 3l8.5 4.5v4.665");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wtird7qzy {
  d: path("M3.5 7.5L12 12l8.5-4.5M12 12v9M9.25 3.5v17M3.5 9.25h17M14.75 3.5v5.75m-5.5 5.5h3M18 15v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="gnrxnbuoe"/><path class="wtird7qzy"/></g>`,
		"fallback": "uix-sharp:grid-plus",
	});
}

export default Component;
