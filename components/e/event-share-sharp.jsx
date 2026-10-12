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
		"content": `<style>.bnr1nsbob {
  d: path("M2.75 9.25h18.5v12H2.75z");
}

.pl8y3ac9f {
  d: path("M3.5 10.5L12 16l8.5-5.5M12 2.75l.33 2.42l2.42.33l-2.42.33L12 8.25l-.33-2.42l-2.42-.33l2.42-.33z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bnr1nsbob"/><path class="pl8y3ac9f"/></g>`,
		"fallback": "iconoven:event-share-sharp",
	});
}

export default Component;
