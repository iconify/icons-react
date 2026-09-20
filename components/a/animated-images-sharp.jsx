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
		"content": `<style>.fqg0ies1y {
  fill: currentColor;
  d: path("m12.5 12.75l4.789-3.25L12.5 6.25zm-7.915 8.279L2.927 8.066l2.612-.254v10.65h12.8l.086.825zm2.954-4.567V3H21v13.462z");
}
</style><path class="fqg0ies1y"/>`,
		"fallback": "material-symbols-light:animated-images-sharp",
	});
}

export default Component;
