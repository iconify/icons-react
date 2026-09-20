import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l5ram60pd {
  fill: currentColor;
  d: path("M4.415 2c-.447 0-.86.239-1.083.626l-1.586 2.75a1.25 1.25 0 0 0 0 1.248l1.586 2.75A1.25 1.25 0 0 0 4.415 10h3.17c.447 0 .86-.239 1.083-.626l1.585-2.75a1.25 1.25 0 0 0 0-1.248l-1.585-2.75A1.25 1.25 0 0 0 7.585 2z");
}
</style><path class="l5ram60pd"/>`,
		"fallback": "fluent:hexagon-12-filled",
	});
}

export default Component;
