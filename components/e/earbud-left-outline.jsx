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
		"content": `<style>.dbv6zko2g {
  fill: currentColor;
  d: path("M8 22q-.825 0-1.412-.587T6 20v-8H5q-.825 0-1.412-.587T3 10V6q0-.825.588-1.412T5 4h9v2H5v4h3v10h2V10h4v2h-2v8q0 .825-.587 1.413T10 22zm6-8V2h1q2.5 0 4.25 1.75T21 8t-1.75 4.25T15 14zm2-2.125q1.35-.35 2.175-1.425T19 8t-.825-2.45T16 4.125zM16 8");
}
</style><path class="dbv6zko2g"/>`,
		"fallback": "material-symbols:earbud-left-outline",
	});
}

export default Component;
