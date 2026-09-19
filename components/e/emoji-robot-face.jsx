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
		"content": `<style>.a8qwp8bzw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.02 11.054V9.195a1.85 1.85 0 0 1 1.85-1.85h0a1.85 1.85 0 0 1 1.85 1.85v1.85");
}

.sq5voiqss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.79 34.363H18.21a2.97 2.97 0 0 1-2.96-2.96h0a2.97 2.97 0 0 1 2.96-2.961h12.58a2.97 2.97 0 0 1 2.96 2.96h0a2.97 2.97 0 0 1-2.96 2.961M7.85 29.552A1.85 1.85 0 0 1 6 27.702v-5.923a1.85 1.85 0 0 1 1.85-1.85h0a1.85 1.85 0 0 1 1.85 1.85v5.922a1.85 1.85 0 0 1-1.85 1.85m33.3.001a1.85 1.85 0 0 0 1.85-1.85v-5.923a1.85 1.85 0 0 0-1.85-1.85h0a1.85 1.85 0 0 0-1.85 1.85v5.922a1.85 1.85 0 0 0 1.85 1.85m-22.57-1.11v5.922m3.7-5.922v5.922m3.7-5.922v5.922m3.7-5.922v5.922m-.74-13.693a2.097 2.097 0 1 0 0-.002zm-12.95 0a2.097 2.097 0 1 0 4.194.003v-.003a2.097 2.097 0 1 0-4.194 0");
}

.zb7fqmv3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.973 40.655H16.027c-3.48 0-6.327-2.848-6.327-6.328V17.374c0-3.48 2.847-6.328 6.327-6.328h16.946c3.48 0 6.327 2.848 6.327 6.328v16.953c0 3.48-2.847 6.328-6.327 6.328");
}
</style><path class="a8qwp8bzw"/><path class="zb7fqmv3f"/><path class="sq5voiqss"/>`,
		"fallback": "arcticons:emoji-robot-face",
	});
}

export default Component;
