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
		"content": `<style>.xo5u-_v_g {
  fill: currentColor;
  d: path("M12 15h5V5h-6v6h4v2h-3zm3-6h-2V7h2zm-9 9V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zm6-6V4z");
}
</style><path class="xo5u-_v_g"/>`,
		"fallback": "material-symbols:filter-9-outline-sharp",
	});
}

export default Component;
