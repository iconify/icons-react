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
		"content": `<style>.u1j0_db5w {
  fill: currentColor;
  d: path("M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h4v2.25L6 19l1 .75V22zm0-7v-3.75h2.5v-.75H3V9h4v3.75H4.5v.75H7V15zm1.5-7V3.5H3V2h3v6zM9 19v-2h12v2zm0-6v-2h12v2zm0-6V5h12v2z");
}
</style><path class="u1j0_db5w"/>`,
		"fallback": "material-symbols:format-list-numbered-sharp",
	});
}

export default Component;
