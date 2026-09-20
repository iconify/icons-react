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
		"content": `<style>.m_jn68gdr {
  fill: currentColor;
  d: path("M12 21.377L2.623 12L12 2.623L21.377 12zM12 20l8-8l-8-8l-8 8zm0-3.692L16.308 12L12 7.692l-.708.708l3.089 3.1H7.692v1h6.689l-3.089 3.1zM12 12");
}
</style><path class="m_jn68gdr"/>`,
		"fallback": "material-symbols-light:directions-alt-outline-sharp",
	});
}

export default Component;
