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
		"content": `<style>.lsr9ewboa {
  fill: currentColor;
  d: path("M6 16h12V8H6zm-4 4V4h20v16z");
}
</style><path class="lsr9ewboa"/>`,
		"fallback": "material-symbols:capture-sharp",
	});
}

export default Component;
