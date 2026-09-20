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
		"content": `<style>.ur1q23b4v {
  fill: currentColor;
  d: path("m13.775 22l-3.625-7.8L6 20V2l14 11h-7.1l3.6 7.725z");
}
</style><path class="ur1q23b4v"/>`,
		"fallback": "material-symbols:arrow-selector-tool-sharp",
	});
}

export default Component;
