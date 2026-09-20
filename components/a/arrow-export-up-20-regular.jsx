import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.km1x2gb7f {
  fill: currentColor;
  d: path("M9.646 2.146a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L10.5 3.707V14.5a.5.5 0 0 1-1 0V3.707L6.354 6.854a.5.5 0 1 1-.708-.708zM4 17.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5");
}
</style><path class="km1x2gb7f"/>`,
		"fallback": "fluent:arrow-export-up-20-regular",
	});
}

export default Component;
