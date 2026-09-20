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
		"content": `<style>.csb4zpv7z {
  fill: currentColor;
  d: path("M4 21v-1h16v1zm0-5.5v-1h16v1zm0-6v-1h16v1zM4 4V3h16v1z");
}
</style><path class="csb4zpv7z"/>`,
		"fallback": "material-symbols-light:density-small-sharp",
	});
}

export default Component;
