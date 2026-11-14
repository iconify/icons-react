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
		"content": `<style>.b4o52mbny {
  d: path("m17.25 18l-1.75 1.75l1.75 1.75");
}

.su428d_4q {
  d: path("M12.7 21.5H4.5v-19h15V11M8 7h8m-8 3.5h8M8 14h2.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwuthcbmc {
  d: path("M13.5 13.75h5.25a3 3 0 0 1 0 6H15.5");
}
</style><g class="ulnmmdpxh"><path class="su428d_4q"/><path class="zwuthcbmc"/><path class="b4o52mbny"/></g>`,
		"fallback": "uix-sharp:code-wrap",
	});
}

export default Component;
