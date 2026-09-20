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
		"content": `<style>.jtt8g10_o {
  d: path("M9 10h6");
}

.nb_catcjy {
  d: path("M12 7v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wv6md6qod {
  d: path("M15 3h3v18l-6 -6 -6 6V3h3");
}
</style><g class="s0phu2bbs"><path class="wv6md6qod"/><path class="nb_catcjy"/><path class="jtt8g10_o"/></g>`,
		"fallback": "iconmind:bookmark-add-outline-bold",
	});
}

export default Component;
