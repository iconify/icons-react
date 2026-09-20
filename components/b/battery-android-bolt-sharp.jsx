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
		"content": `<style>.vem53_6eh {
  fill: currentColor;
  d: path("M2 17V7h15.723l-6.277 7.846h4.785L15.796 17zm15.867-.77l.604-3.384h-2.855l4.069-5.077h.448l-.604 3.385h2.856l-4.07 5.077z");
}
</style><path class="vem53_6eh"/>`,
		"fallback": "material-symbols-light:battery-android-bolt-sharp",
	});
}

export default Component;
