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
		"content": `<style>.kv1e2cbps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.5V12h2V8.5h2v-3h5v3h2V12h2v9.5Zm6.5-19v3M12 9v9");
}
</style><path class="kv1e2cbps"/>`,
		"fallback": "uix-sharp:art-deco-building",
	});
}

export default Component;
