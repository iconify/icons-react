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
		"content": `<style>.z8mbkua-z {
  fill: currentColor;
  d: path("M6 16h12V8H6zm-4 4V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="z8mbkua-z"/>`,
		"fallback": "material-symbols:capture-outline-sharp",
	});
}

export default Component;
