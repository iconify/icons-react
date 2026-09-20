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
		"content": `<style>.ifqa-hi3d {
  fill: currentColor;
  d: path("M7.692 20v-3h-2v-1h2V4h9.616v1H8.692v6.308h7.616v1H8.692V16H12.5v1H8.692v3z");
}
</style><path class="ifqa-hi3d"/>`,
		"fallback": "material-symbols-light:currency-franc-sharp",
	});
}

export default Component;
