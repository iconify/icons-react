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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.olma08bid {
  d: path("m13 17 2.5 2.5L20 15");
}

.qxwxnhbhy {
  d: path("M12.5 12.5 16 16");
}

.s7h04rdua {
  d: path("M4 9a5 5 0 1 0 10 0A5 5 0 1 0 4 9");
}
</style><g class="hntgybcog"><path class="s7h04rdua"/><path class="qxwxnhbhy"/><path class="olma08bid"/></g>`,
		"fallback": "iconmind:eval-rag-outline-thin",
	});
}

export default Component;
