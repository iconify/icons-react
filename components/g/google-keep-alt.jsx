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
		"content": `<style>.hgdtb5boj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.59 31.136a6.28 6.28 0 0 0 1.722-4.324a6.312 6.312 0 1 0-12.624 0c0 1.676.657 3.194 1.722 4.324zM20 34.5h8");
}

.r4h1y5b9l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11");
}
</style><path class="r4h1y5b9l"/><path class="hgdtb5boj"/>`,
		"fallback": "arcticons:google-keep-alt",
	});
}

export default Component;
