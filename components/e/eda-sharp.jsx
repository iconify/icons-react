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
		"content": `<style>.v0g3_4--i {
  fill: currentColor;
  d: path("M4 22.27v-6.347h4.239l3.226 4.294l4.772-4.77l3.6-2.157l1.919 1.418l-7.562 7.561zm3.673-10.5v-9h1v9h2.664v-10h.99v10h2.664v-8H16v10.517l-4.43 4.419l-2.831-3.783H4V4.769h1v7z");
}
</style><path class="v0g3_4--i"/>`,
		"fallback": "material-symbols-light:eda-sharp",
	});
}

export default Component;
