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
		"content": `<style>.blzwzs-bz {
  d: path("M2 18h8");
}

.f-x5yl3mg {
  d: path("M2 12h11");
}

.gyi-tobvb {
  d: path("M20 5v14");
}

.jtrmczbpr {
  d: path("M2 6h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ztr6a0gki {
  d: path("m17 16 3 3 2 -2");
}
</style><g class="s0phu2bbs"><path class="jtrmczbpr"/><path class="f-x5yl3mg"/><path class="blzwzs-bz"/><path class="gyi-tobvb"/><path class="ztr6a0gki"/></g>`,
		"fallback": "iconmind:collation-outline-bold",
	});
}

export default Component;
