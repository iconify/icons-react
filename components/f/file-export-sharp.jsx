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
		"content": `<style>.tp7icdbra {
  fill: currentColor;
  d: path("m5.05 22.375l-1.4-1.425L6.6 18H4.35v-2H10v5.65H8v-2.225zM12 22v-8H4V2h10l6 6v14zm1-13h5l-5-5l5 5l-5-5z");
}
</style><path class="tp7icdbra"/>`,
		"fallback": "material-symbols:file-export-sharp",
	});
}

export default Component;
