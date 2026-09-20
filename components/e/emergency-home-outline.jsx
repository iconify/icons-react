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
		"content": `<style>.r5iw8sb2f {
  fill: currentColor;
  d: path("M11.401 20.654q-.295-.121-.537-.358l-7.16-7.16q-.237-.242-.358-.537T3.225 12t.121-.602t.358-.534l7.16-7.16q.242-.242.537-.36t.599-.12t.602.118t.535.36l7.16 7.16q.241.237.36.535q.118.298.118.602t-.118.599t-.36.538l-7.16 7.16q-.237.236-.535.357t-.602.121t-.599-.121m1.041-1.071l7.14-7.14q.155-.154.155-.443t-.154-.442l-7.14-7.14q-.154-.155-.443-.155t-.442.154l-7.14 7.14q-.155.155-.155.443t.154.442l7.14 7.14q.155.155.443.155t.442-.154m-.942-6.41h1v-5.23h-1zm.934 2.049q.182-.181.182-.433t-.182-.434t-.434-.182t-.434.182t-.182.433t.182.434t.434.182t.434-.182M12 12");
}
</style><path class="r5iw8sb2f"/>`,
		"fallback": "material-symbols-light:emergency-home-outline",
	});
}

export default Component;
