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
		"content": `<style>.mb6uyu7ii {
  fill: currentColor;
  d: path("M2 21V8h6v1v-5h10v5h4v11H8v1zm2-2h2v-9H4zm6-10h6V6h-6zm-2 9h12v-7H8zm1-1h4v-5H9zm-1 1v-7zm6-4h2v-2h-2zm3 0h2v-2h-2zm-3 3h2v-2h-2zm3 0h2v-2h-2z");
}
</style><path class="mb6uyu7ii"/>`,
		"fallback": "material-symbols:fax-outline-sharp",
	});
}

export default Component;
