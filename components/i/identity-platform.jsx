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
		"content": `<style>.ip5q5kb1u {
  fill: currentColor;
  d: path("m12 20.175l5.12-3.136q-1.154-.741-2.455-1.14T12 15.5t-2.668.409q-1.303.408-2.482 1.124zm2.129-8.546Q15 10.758 15 9.5t-.871-2.129T12 6.5t-2.129.871T9 9.5t.871 2.129T12 12.5t2.129-.871M12 21.327l-8-4.885V7.558l8-4.885l8 4.885v8.884z");
}
</style><path class="ip5q5kb1u"/>`,
		"fallback": "material-symbols-light:identity-platform",
	});
}

export default Component;
