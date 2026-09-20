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
		"content": `<style>.gj-r-1bay {
  fill: currentColor;
  d: path("M3.577 19.385v-4.77q0-.846.577-1.423q.577-.576 1.423-.576H7v-7.77h10v7.77h1.423q.846 0 1.423.576q.577.577.577 1.424v4.769zM8 12.615h8V5.847H8zm9.616 3.616q.425 0 .712-.288t.288-.712t-.288-.713t-.712-.287t-.713.287t-.287.713t.287.712t.713.288");
}
</style><path class="gj-r-1bay"/>`,
		"fallback": "material-symbols-light:adf-scanner",
	});
}

export default Component;
