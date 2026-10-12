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
		"content": `<style>.rcnyf-bmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h14v10.5h-14zm0 4h14m-8.5 8.75V19h12.5m-2.25-2.25L20.75 19l-2.25 2.25");
}
</style><path class="rcnyf-bmu"/>`,
		"fallback": "iconoven:direct-debit-sharp",
	});
}

export default Component;
