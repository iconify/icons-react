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
		"content": `<style>.z4s40v6hc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5c2.776 12.263 11.973 17.339 11.973 28.044C35.973 42.696 25.646 43.5 24 43.5s-11.973-.804-11.973-10.956C12.027 21.839 21.224 16.763 24 4.5");
}
</style><path class="z4s40v6hc"/>`,
		"fallback": "arcticons:europlasma",
	});
}

export default Component;
