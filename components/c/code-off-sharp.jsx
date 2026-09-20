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
		"content": `<style>.ka_1_6xvc {
  fill: currentColor;
  d: path("M19.775 22.625L7 9.85l-2.175 2.175L9.4 16.6L8 18l-6-6l3.575-3.575l-4.2-4.2L2.8 2.8l18.4 18.4zm-1.35-7.05L17 14.15l2.175-2.175L14.6 7.4L16 6l6 6z");
}
</style><path class="ka_1_6xvc"/>`,
		"fallback": "material-symbols:code-off-sharp",
	});
}

export default Component;
