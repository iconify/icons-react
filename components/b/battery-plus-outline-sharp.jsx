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
		"content": `<style>.vw-1d4bod {
  fill: currentColor;
  d: path("M7.885 21V4.48h2.423V3h3.384v1.48h2.424v7.712q-.275.039-.516.088t-.484.128V5.462H8.885V20h2.561q.104.287.228.527t.293.473zm8.5 0v-2.616h-2.616v-1h2.615V14.77h1v2.615H20v1h-2.616V21z");
}
</style><path class="vw-1d4bod"/>`,
		"fallback": "material-symbols-light:battery-plus-outline-sharp",
	});
}

export default Component;
