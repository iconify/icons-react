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
		"content": `<style>.iso48en0p {
  fill: currentColor;
  d: path("M2.6 10L3 4h18l.4 6zM5 20l-.325-1H2l.475-7h19.05L22 19h-2.675L19 20z");
}
</style><path class="iso48en0p"/>`,
		"fallback": "material-symbols:google-wifi-sharp",
	});
}

export default Component;
