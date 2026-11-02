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
		"content": `<style>.l4559ebmd {
  fill: currentColor;
  d: path("M16.586 13H5a1 1 0 0 1 0-2h11.586l-3.293-3.293a.999.999 0 1 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a.999.999 0 1 1-1.414-1.414Z");
}
</style><path class="l4559ebmd"/>`,
		"fallback": "coolicons:arrow-right-fill-sharp",
	});
}

export default Component;
