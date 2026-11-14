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
		"content": `<style>.vgpcjr37k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6c-2-1.5-5.5-2-9.5-1.5V19c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5V4.5C17.5 4 14 4.5 12 6Zm0 0v14.5m3.25-15.75v14.5m3.25-15v14.5M12 9.25h9.5m-9.5 5h9.5");
}
</style><path class="vgpcjr37k"/>`,
		"fallback": "uix-sharp:baseball-scorebook",
	});
}

export default Component;
