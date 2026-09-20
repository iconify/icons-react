import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cyo699t7q {
  fill: var(--svg-color--b4fae2, #b4fae2);
  stroke: var(--svg-color--b4fae2, #b4fae2);
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--0-336px, 0.336px);
  d: path("m26.167 24.724l-1.565-7.265l-3.336 2.521zm-3.472-3.358l-4.9-4.743l1.564 7.272z");
}

.jo6abab1z {
  fill: var(--svg-color--7080ff, #7080ff);
  d: path("M27.417 5.5H18.19l-2.083 4.2H4.5v16.8h25v-21Zm0 4.2h-8.135l1.091-2.1h7.044Z");
}

.l_xr03cls {
  fill: var(--svg-color--34d399, #34d399);
  d: path("m15.301 12.965l12.044-.964a.327.327 0 0 1 .35.3l1.265 15.773a.32.32 0 0 1-.3.35l-12.044.964a.32.32 0 0 1-.35-.3L15 13.315a.32.32 0 0 1 .3-.35");
}
</style><path class="jo6abab1z"/><path class="l_xr03cls"/><path class="cyo699t7q"/>`,
		"fallback": "vscode-icons:folder-type-histoire",
	});
}

export default Component;
