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
		"content": `<style>.ocf-iebjz {
  fill: currentColor;
  d: path("M2 21V7h2v12h15v2zm4-4V3h17v14zm4-5h4V7h-4zm5 0h4v-2h-4zm0-3h4V7h-4z");
}
</style><path class="ocf-iebjz"/>`,
		"fallback": "material-symbols:full-coverage-sharp",
	});
}

export default Component;
