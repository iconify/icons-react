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
		"content": `<style>.mfx-z4hzf {
  fill: currentColor;
  d: path("M4.462 14.692H8.25l.596-.615V9.904l-.596-.596H4.462zm.884-.884v-3.616h2.616v3.616zm6.139.884h1.038l1.673-5.384h-.846l-1.346 4.258l-1.346-4.258h-.846zm3.823 0h.884v-2h1.574l.85 2h.923l-.862-2.061h1.015V9.308h-4.384zm.884-2.884v-1.616h2.616v1.616zM2 19V5h20v14z");
}
</style><path class="mfx-z4hzf"/>`,
		"fallback": "material-symbols-light:fiber-dvr-sharp",
	});
}

export default Component;
