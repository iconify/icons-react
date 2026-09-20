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
		"content": `<style>.fgwut-bko {
  fill: currentColor;
  d: path("m15.95 20.464l-2.138-2.114l.713-.708l1.425 1.42l3.525-3.525l.713.688zM7.885 21V4.48h2.423V3h3.384v1.48h2.424v7.712q-.275.039-.516.088t-.484.128V5.462H8.885V20h2.561q.104.287.228.527t.293.473z");
}
</style><path class="fgwut-bko"/>`,
		"fallback": "material-symbols-light:battery-status-good-outline-sharp",
	});
}

export default Component;
