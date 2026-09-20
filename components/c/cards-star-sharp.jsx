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
		"content": `<style>.nugmjccfm {
  fill: currentColor;
  d: path("m12.34 12.192l1.93-1.163l1.928 1.163l-.523-2.196l1.712-1.475l-2.24-.186l-.878-2.066l-.877 2.066l-2.24.186l1.712 1.475zM4.586 21.03L2.927 8.066l2.612-.254v10.65h12.8l.086.825zm2.954-4.567V3H21v13.462z");
}
</style><path class="nugmjccfm"/>`,
		"fallback": "material-symbols-light:cards-star-sharp",
	});
}

export default Component;
