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
		"content": `<style>.fp3s7xb9g {
  fill: currentColor;
  d: path("M11.283 16.5h6.333v-1h-5.333zm-4.898 0h2.21l7.132-7.127l-2.19-2.21l-7.153 7.128zm7.151-6.177l-.95-.95l.95-.95l.926.944zM4 20V4h16v16z");
}
</style><path class="fp3s7xb9g"/>`,
		"fallback": "material-symbols-light:drive-file-rename-sharp",
	});
}

export default Component;
