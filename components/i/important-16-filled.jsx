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
		"content": `<style>.irzpsnb-n {
  fill: currentColor;
  d: path("M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0zM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="irzpsnb-n"/>`,
		"fallback": "fluent:important-16-filled",
	});
}

export default Component;
