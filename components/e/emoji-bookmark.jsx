import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.acuw_lbhm {
  fill: none;
  stroke: currentColor;
  d: path("M32.277 42.5L24 33.34l-8.277 9.16v-37h16.554z");
}

.c-zrgpb5l {
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><defs><path id="SVGwiCtPWFr" class="acuw_lbhm"/></defs><use href="#SVGwiCtPWFr" class="c-zrgpb5l"/><use href="#SVGwiCtPWFr" class="c-zrgpb5l"/>`,
		"fallback": "arcticons:emoji-bookmark",
	});
}

export default Component;
