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
		"content": `<style>.eciw35r4d {
  fill: currentColor;
  d: path("M1.77 19.462v-1h20.46v1zm1.23-2v-13h18v13z");
}
</style><path class="eciw35r4d"/>`,
		"fallback": "material-symbols-light:computer-sharp",
	});
}

export default Component;
