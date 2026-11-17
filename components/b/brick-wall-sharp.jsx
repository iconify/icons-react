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
		"content": `<style>.ag7xwu40y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4h18v16H3Zm0 4h18M3 12h18M3 16h18M12 4v4M8 8v4m8-4v4m-4 0v4m-4 0v4m8-4v4");
}
</style><path class="ag7xwu40y"/>`,
		"fallback": "coolicons:brick-wall-sharp",
	});
}

export default Component;
