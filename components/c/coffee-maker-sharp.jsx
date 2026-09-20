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
		"content": `<style>.kpnx8cbvj {
  fill: currentColor;
  d: path("M5 21V3h14v1h-2.5v1.923h-8V4H6v16h4.512q-.893-.54-1.452-1.395q-.56-.855-.56-2.067v-4h8v4q0 1.212-.56 2.067q-.56.854-1.451 1.395H19v1zm8.04-11.23q.23-.23.23-.54q0-.309-.23-.539t-.54-.23t-.54.23t-.23.54t.23.54t.54.229t.54-.23");
}
</style><path class="kpnx8cbvj"/>`,
		"fallback": "material-symbols-light:coffee-maker-sharp",
	});
}

export default Component;
