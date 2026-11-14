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
		"content": `<style>.pusb6bb7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v16h-19Zm0 5.25h19m-19 5.5h19M12 4v5.25m-5 0v5.5m10-5.5v5.5m-5 0V20");
}
</style><path class="pusb6bb7p"/>`,
		"fallback": "uix-sharp:brick-pattern",
	});
}

export default Component;
