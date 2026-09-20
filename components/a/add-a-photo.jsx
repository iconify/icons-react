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
		"content": `<style>.kl-3qkbqf {
  fill: currentColor;
  d: path("M19 7V5h-2V4h2V2h1v2h2v1h-2v2zm-8 9.73q1.567 0 2.649-1.081T14.731 13t-1.082-2.649T11 9.269t-2.649 1.082T7.269 13t1.082 2.649T11 16.731m0-1q-1.165 0-1.948-.783T8.269 13t.783-1.948T11 10.269t1.948.783t.783 1.948t-.783 1.948t-1.948.783M3.616 20q-.691 0-1.153-.462T2 18.384V7.616q0-.691.463-1.153T3.616 6h2.957l1.85-2h6.193v3.385h2v2H20v9q0 .69-.462 1.153T18.384 20z");
}
</style><path class="kl-3qkbqf"/>`,
		"fallback": "material-symbols-light:add-a-photo",
	});
}

export default Component;
