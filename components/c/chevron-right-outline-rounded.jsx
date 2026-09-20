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
		"content": `<style>.phnlay29j {
  fill: currentColor;
  d: path("M13.292 12L9.046 7.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l4.388 4.389q.131.13.184.267t.053.298t-.053.298t-.184.268l-4.388 4.388q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354z");
}
</style><path class="phnlay29j"/>`,
		"fallback": "material-symbols-light:chevron-right-outline-rounded",
	});
}

export default Component;
