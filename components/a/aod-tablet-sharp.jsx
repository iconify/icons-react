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
		"content": `<style>.a60dc9bnn {
  fill: currentColor;
  d: path("M1 20V4h22v16zm5-2h12V6H6zm2-6.5V10h8v1.5zm1 3V13h6v1.5z");
}
</style><path class="a60dc9bnn"/>`,
		"fallback": "material-symbols:aod-tablet-sharp",
	});
}

export default Component;
