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
		"content": `<style>.bdfa4n-bo {
  fill: currentColor;
  d: path("M2 17V7h15.723l-.792 1H3v8h12.998l-.202 1zm15.867-.77l.604-3.384h-2.855l4.069-5.077h.448l-.604 3.385h2.856l-4.07 5.077zM4.385 14.617V9.385h11.438l-4.184 5.23z");
}
</style><path class="bdfa4n-bo"/>`,
		"fallback": "material-symbols-light:battery-android-frame-bolt-sharp",
	});
}

export default Component;
