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
		"content": `<style>.jj56vabqi {
  fill: currentColor;
  d: path("M17.5 14.5v-1h3v1zm0 4v-1h3v1zm-5 1v-2h-2v-3h2v-2h4v7zm-9-3v-7h7v-4h-6v-1h7v6h-7v5h5v1z");
}
</style><path class="jj56vabqi"/>`,
		"fallback": "material-symbols-light:electrical-services-outline-sharp",
	});
}

export default Component;
