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
		"content": `<style>.gvyqw0uhw {
  fill: currentColor;
  d: path("M4.385 17q-1 0-1.693-.692T2 14.616V9.385q0-1 .692-1.693T4.385 7h13.338l-6.277 7.846h4.785L15.796 17zm13.482-.77l.604-3.384h-2.855l4.069-5.077h.448l-.604 3.385h2.856l-4.07 5.077z");
}
</style><path class="gvyqw0uhw"/>`,
		"fallback": "material-symbols-light:battery-android-bolt",
	});
}

export default Component;
