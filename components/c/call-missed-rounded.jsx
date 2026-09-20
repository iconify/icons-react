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
		"content": `<style>.ji_tpxbuy {
  fill: currentColor;
  d: path("M5 10.425V14q0 .425-.288.713T4 15t-.712-.288T3 14V8q0-.425.288-.712T4 7h6q.425 0 .713.288T11 8t-.288.713T10 9H6.4l5.6 5.6l6.9-6.9q.3-.3.7-.287t.7.312q.275.3.287.7t-.287.7L13.425 16q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45z");
}
</style><path class="ji_tpxbuy"/>`,
		"fallback": "material-symbols:call-missed-rounded",
	});
}

export default Component;
