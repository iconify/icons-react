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
		"content": `<style>.ymyh0v1co {
  fill: currentColor;
  d: path("m19.95 17.7l-2.142-1.104l1.844-4.538L21.737 16zm-5.296-.97l.812-9.193l4.357 1.736l-3.015 7.458zm-7.462 0L4.234 9.255l4.3-1.717l.812 9.194zm-3.142.97l-1.786-1.623l2.123-4.02l1.805 4.54zm6.18-.97L9.309 6.27h5.384l-.923 10.46z");
}
</style><path class="ymyh0v1co"/>`,
		"fallback": "material-symbols-light:bakery-dining-sharp",
	});
}

export default Component;
