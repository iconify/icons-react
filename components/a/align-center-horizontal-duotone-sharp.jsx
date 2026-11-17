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
		"content": `<style>.aakjkgb9i {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v6H4Zm2 10h12v6H6Zm6-11v18");
}

.ft5dv1b6b {
  fill: none;
}

.m3fi4kqhw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h16v6H4Zm2 10h12v6H6Z");
}
</style><g class="ft5dv1b6b"><path class="m3fi4kqhw"/><path class="aakjkgb9i"/></g>`,
		"fallback": "coolicons:align-center-horizontal-duotone-sharp",
	});
}

export default Component;
