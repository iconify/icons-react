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
		"content": `<style>.eyrno9bjs {
  fill: currentColor;
  d: path("M20 15.5h-1v5.066L1.789 12.025L19 3.454V8.5h1v1h-3v-1h1V5.094l-4.977 2.464q.675.998 1.076 2.12q.401 1.124.401 2.322q0 1.217-.401 2.356t-1.082 2.136l4.958 2.464V15.5H17v-1h3zm-7.904.529q.639-.889 1.021-1.905q.383-1.016.383-2.124q0-1.088-.373-2.099q-.373-1.01-1.006-1.886L4.038 12z");
}
</style><path class="eyrno9bjs"/>`,
		"fallback": "material-symbols-light:body-fat-sharp",
	});
}

export default Component;
