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
		"content": `<style>.n8utxbseb {
  fill: currentColor;
  d: path("M6 21V4h14l-2.096 4.27L20 12.538H7V21z");
}
</style><path class="n8utxbseb"/>`,
		"fallback": "material-symbols-light:flag-2-sharp",
	});
}

export default Component;
