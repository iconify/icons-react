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
		"content": `<style>.h4vhxdbcn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.44 7.001L9.47 5.03q-.053-.052-.094-.113t-.069-.13t-.043-.141T9.25 4.5t.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.105-.106.243-.163T10 3.75t.287.057t.243.163l1.971 1.97q1.142-1.09 2.568-.352l4.454 2.304q1.014.525 1.189 1.653t-.633 1.936l-3.098 3.098q-.807.808-1.936.633q-1.128-.175-1.653-1.189l-1.314-2.54L4.03 19.53q-.105.106-.243.163t-.287.057t-.287-.057t-.243-.163q-.053-.052-.094-.113t-.069-.13t-.043-.141T2.75 19q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113l8.385-8.385l-.267-.516q-.738-1.426.352-2.568");
}
</style><path class="h4vhxdbcn"/>`,
		"fallback": "uix-solid:crash-axe",
	});
}

export default Component;
