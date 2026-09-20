import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k7hucw4qb {
  fill: currentColor;
  d: path("M6 2.5a.5.5 0 0 0-1 0V5H2.5a.5.5 0 0 0 0 1H5v6.5A2.5 2.5 0 0 0 7.5 15H14v2.5a.5.5 0 0 0 1 0V15h2.5a.5.5 0 0 0 0-1h-10A1.5 1.5 0 0 1 6 12.5zm8 5V13h1V7.5A2.5 2.5 0 0 0 12.5 5H7v1h5.5A1.5 1.5 0 0 1 14 7.5");
}
</style><path class="k7hucw4qb"/>`,
		"fallback": "fluent:crop-20-regular",
	});
}

export default Component;
