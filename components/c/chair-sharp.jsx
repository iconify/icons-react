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
		"content": `<style>.lhndg-blp {
  fill: currentColor;
  d: path("M4.539 19.346v-1.5H2v-8h3v4.5h14v-4.5h3v8h-2.538v1.5H18.5v-1.5H5.539v1.5zm1.461-6v-4.5H4V5.231h16v3.615h-2v4.5z");
}
</style><path class="lhndg-blp"/>`,
		"fallback": "material-symbols-light:chair-sharp",
	});
}

export default Component;
