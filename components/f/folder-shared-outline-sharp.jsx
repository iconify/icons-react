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
		"content": `<style>.pgy0hgb5j {
  fill: currentColor;
  d: path("M2 20V4h8l2 2h10v14zm2-2h16V8h-8.825l-2-2H4zm0 0V6zm7-1h8v-.55q0-1.125-1.1-1.787T15 14t-2.9.663T11 16.45zm5.413-4.587Q17 11.825 17 11t-.587-1.412T15 9t-1.412.588T13 11t.588 1.413T15 13t1.413-.587");
}
</style><path class="pgy0hgb5j"/>`,
		"fallback": "material-symbols:folder-shared-outline-sharp",
	});
}

export default Component;
