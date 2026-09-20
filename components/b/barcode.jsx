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
		"content": `<style>.m3ox6q7or {
  fill: currentColor;
  d: path("M2.692 18.308V6.462h1.693v11.846zm2.539 0V6.462h1.692v11.846zm2.538 0V6.462h.847v11.846zm2.539 0V6.462H12v11.846zm2.538 0V6.462h2.539v11.846zm3.385 0V6.462h.846v11.846zm2.538 0V6.462h2.539v11.846z");
}
</style><path class="m3ox6q7or"/>`,
		"fallback": "material-symbols-light:barcode",
	});
}

export default Component;
