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
		"content": `<style>.t44_e6b-g {
  fill: currentColor;
  d: path("M2.5 5.5v-4h4v1h-3v3zm18 0v-3h-3v-1h4v4zm-18 17v-4h1v3h3v1zm15 0v-1h3v-3h1v4zm-12-3v-15h13v15zm4-10h5v-1h-5zm0 3h5v-1h-5zm0 3h5v-1h-5z");
}
</style><path class="t44_e6b-g"/>`,
		"fallback": "material-symbols-light:document-scanner-sharp",
	});
}

export default Component;
