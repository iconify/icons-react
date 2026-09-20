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
		"content": `<style>.lja33zmmm {
  fill: currentColor;
  d: path("m12 3l11 8.25l-1.2 1.6L20 11.5V21H4v-9.5l-1.8 1.35l-1.2-1.6zm-4.65 9.05q0 1.325 1.425 2.825T12 18q1.8-1.625 3.225-3.125t1.425-2.825q0-1.1-.75-1.825T14.1 9.5q-.65 0-1.188.263T12 10.45q-.375-.425-.937-.687T9.9 9.5q-1.05 0-1.8.725t-.75 1.825");
}
</style><path class="lja33zmmm"/>`,
		"fallback": "material-symbols:family-home-sharp",
	});
}

export default Component;
