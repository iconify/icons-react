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
		"content": `<style>.ipx9ljbzd {
  fill: currentColor;
  d: path("M6 16h12V8H6zm2-2l2.125-2.825L11.5 13l1.875-2.5L16 14zm-6 6V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="ipx9ljbzd"/>`,
		"fallback": "material-symbols:image-inset-outline-sharp",
	});
}

export default Component;
