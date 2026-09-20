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
		"content": `<style>.l5w-hzb3d {
  fill: currentColor;
  d: path("M7.5 13.5v-1h9v1zm0 4v-1h6v1zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5z");
}
</style><path class="l5w-hzb3d"/>`,
		"fallback": "material-symbols-light:event-note-sharp",
	});
}

export default Component;
