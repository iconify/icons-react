import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mzjmbldra {
  fill: currentColor;
  d: path("M184 66H40a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h144a6 6 0 0 0 6-6V72a6 6 0 0 0-6-6m-6 144H46V78h132Zm44-170v144a6 6 0 0 1-12 0V46H72a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6");
}
</style><path class="mzjmbldra"/>`,
		"fallback": "ph:copy-simple-light",
	});
}

export default Component;
