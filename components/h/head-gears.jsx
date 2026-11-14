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
		"content": `<style>.ocyf5ip6z {
  d: path("M8 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C4.5 6.25 7.75 3 12 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5-.1 1-.75 1H19v2.25c0 1.1-.9 2-2 2h-2v3");
}

.oxhltr2ln {
  d: path("m9.25 6.25l.765.902l1.18-.097l-.097 1.18L12 9l-.902.765l.097 1.18l-1.18-.097l-.765.902l-.765-.902l-1.18.097l.097-1.18L6.5 9l.902-.765l-.097-1.18l1.18.097Zm5.5 5.25l.651.899l1.108-.052l-.297 1.069l.732.835l-1.021.434l-.197 1.092l-.976-.527l-.976.527l-.197-1.092l-1.021-.434l.732-.835l-.297-1.069l1.108.052Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ocyf5ip6z"/><path class="oxhltr2ln"/></g>`,
		"fallback": "uix-sharp:head-gears",
	});
}

export default Component;
