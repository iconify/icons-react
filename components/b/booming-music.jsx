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
		"content": `<style>.jaxcg8bnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.775 21.488l8.97 13.642M9.592 37.368L23.265 10.85m11.053 19.888l.01-5.925c0-.518.497-.932 1.109-.932h1.585c.6 0 1.098.414 1.098.932l.02 3.698m-9.499 5.521v-13.87c0-.56.498-1.015 1.109-1.015h1.585c.6 0 1.098.456 1.098 1.015l.02 11.654");
}

.oachwlbih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.896 6.002l25.751 14.947c1.119.653 1.761 1.761 1.761 3.056s-.642 2.403-1.761 3.056L14.896 42.008a3.42 3.42 0 0 1-3.533 0a3.42 3.42 0 0 1-1.76-3.055V9.058c0-1.295.631-2.414 1.76-3.066a3.42 3.42 0 0 1 3.533 0");
}

.xmdyrhbsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.955 29.36v-1.688c0-.518.497-.953 1.108-.953h1.585c.6 0 1.098.425 1.098.953v7.458");
}
</style><path class="jaxcg8bnm"/><path class="oachwlbih"/><path class="xmdyrhbsz"/>`,
		"fallback": "arcticons:booming-music",
	});
}

export default Component;
