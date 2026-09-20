import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v6ywggrwh {
  fill: currentColor;
  d: path("M39.75 8A4.25 4.25 0 0 1 44 12.25v23.5A4.25 4.25 0 0 1 39.75 40H8.25A4.25 4.25 0 0 1 4 35.75v-23.5A4.25 4.25 0 0 1 8.25 8zM16 17.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M26.25 26a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5zM16 20a4 4 0 1 1 0 8a4 4 0 0 1 0-8m10.25-1a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5z");
}
</style><path class="v6ywggrwh"/>`,
		"fallback": "fluent:contact-card-generic-48-filled",
	});
}

export default Component;
