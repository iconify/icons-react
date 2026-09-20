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
		"content": `<style>.n24o--baw {
  fill: currentColor;
  d: path("M2 20v-5h11V4h9v16zm0-6V6h8zm3.825-1L11 7.825V13z");
}
</style><path class="n24o--baw"/>`,
		"fallback": "material-symbols:files-sharp",
	});
}

export default Component;
