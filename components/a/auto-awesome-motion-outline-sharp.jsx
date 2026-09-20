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
		"content": `<style>.k2bpz1b0k {
  fill: currentColor;
  d: path("M10 22V10h12v12zm2-2h8v-8h-8zm-6-2V6h12v2H8v10zm-4-4V2h12v2H4v10zm10 6v-8z");
}
</style><path class="k2bpz1b0k"/>`,
		"fallback": "material-symbols:auto-awesome-motion-outline-sharp",
	});
}

export default Component;
