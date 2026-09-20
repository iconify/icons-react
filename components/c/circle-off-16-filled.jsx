import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y9dikmbyg {
  fill: currentColor;
  d: path("M1.146 1.146a.5.5 0 0 1 .708 0l13 13a.5.5 0 1 1-.707.707l-1.565-1.564A7 7 0 0 1 2.71 3.417L1.146 1.854a.5.5 0 0 1 0-.708M8 1a7 7 0 0 1 5.895 10.773l-9.67-9.669A6.97 6.97 0 0 1 8 1");
}
</style><path class="y9dikmbyg"/>`,
		"fallback": "fluent:circle-off-16-filled",
	});
}

export default Component;
