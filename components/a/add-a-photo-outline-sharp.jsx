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
		"content": `<style>.eot-vlb2o {
  fill: currentColor;
  d: path("M11 13h2.73zm-9 7V6h4.573l1.85-2h5.193v1h-4.76L7.012 7H3v12h16v-8.615h1V20zM19 7V5h-2V4h2V2h1v2h2v1h-2v2zm-8 9.73q1.567 0 2.649-1.081T14.731 13t-1.082-2.649T11 9.269t-2.649 1.082T7.269 13t1.082 2.649T11 16.731m0-1q-1.165 0-1.948-.783T8.269 13t.783-1.948T11 10.269t1.948.783t.783 1.948t-.783 1.948t-1.948.783");
}
</style><path class="eot-vlb2o"/>`,
		"fallback": "material-symbols-light:add-a-photo-outline-sharp",
	});
}

export default Component;
