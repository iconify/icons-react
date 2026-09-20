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
		"content": `<style>.o3easlsll {
  fill: currentColor;
  d: path("M10 22V10h12v12zm-4-4V6h12v2H8v10zm-4-4V2h12v2H4v10z");
}
</style><path class="o3easlsll"/>`,
		"fallback": "material-symbols:auto-awesome-motion-sharp",
	});
}

export default Component;
