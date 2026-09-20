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
		"content": `<style>.d92lyn2ge {
  fill: currentColor;
  d: path("M8 13.75L9.975 11h4.25L8 6.1zM13.775 22l-3.625-7.8L6 20V2l14 11h-7.1l3.6 7.725zm-3.8-11");
}
</style><path class="d92lyn2ge"/>`,
		"fallback": "material-symbols:arrow-selector-tool-outline-sharp",
	});
}

export default Component;
