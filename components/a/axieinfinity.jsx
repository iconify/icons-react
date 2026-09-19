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
		"content": `<style>.e8ja5vbmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.477 21.05c-3.58-3.6-9.388-7.565-14.16-9.055a43.84 43.84 0 0 0-.276 24.01c5.832-1.702 11.895-6.215 17.962-11.708a84.8 84.8 0 0 1 17.778-12.3c2.285 6.96 2.212 16.209.256 23.807c-4.732.117-11.212-4.968-14.946-8.845m-10.273-8.373l-7.22 6.78");
}
</style><path class="e8ja5vbmi"/>`,
		"fallback": "arcticons:axieinfinity",
	});
}

export default Component;
