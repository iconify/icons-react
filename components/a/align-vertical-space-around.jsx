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
		"content": `<style>.tpfxwccto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 20H2M22 4H2M15 9H9C7.8895 9 7 9.903 7 11V12V13C7 14.112 7.8948 15 9 15H15C16.1039 15 17 14.105 17 13V12V11C17 9.895 16.0986 9 15 9Z");
}
</style><path class="tpfxwccto"/>`,
		"fallback": "keyline-icons:align-vertical-space-around",
	});
}

export default Component;
