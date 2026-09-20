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
		"content": `<style>.ynyarh1zf {
  fill: currentColor;
  d: path("M9.075 21q-.4 0-.762-.15t-.638-.425l-4.1-4.1q-.275-.275-.425-.638T3 14.926v-5.85q0-.4.15-.762t.425-.638l4.1-4.1q.275-.275.638-.425T9.075 3h5.85q.4 0 .763.15t.637.425l4.1 4.1q.275.275.425.638t.15.762v5.85q0 .4-.15.763t-.425.637l-4.1 4.1q-.275.275-.638.425t-.762.15zm.025-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-5.6l2.15 2.15q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l2.15-2.15q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6L9.85 8.45q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L10.6 12l-2.15 2.15q-.275.275-.275.7t.275.7t.7.275t.7-.275zm0-1.4");
}
</style><path class="ynyarh1zf"/>`,
		"fallback": "material-symbols:dangerous-outline-rounded",
	});
}

export default Component;
