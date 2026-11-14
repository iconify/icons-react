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
		"content": `<style>.fyw9x9xxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h18v12H3Zm0 3l9 9M6 6l12 12M12 6l9 9M3 15l9-9M6 18L18 6m-6 12l9-9");
}
</style><path class="fyw9x9xxc"/>`,
		"fallback": "uix-sharp:expanded-mesh",
	});
}

export default Component;
