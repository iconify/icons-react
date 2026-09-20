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
		"content": `<style>.ccpxfdb4y {
  fill: currentColor;
  d: path("M2.5 18V6l9 6zm10 0V6l9 6z");
}
</style><path class="ccpxfdb4y"/>`,
		"fallback": "material-symbols:fast-forward-sharp",
	});
}

export default Component;
