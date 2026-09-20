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
		"content": `<style>.dvtcp1b1f {
  fill: currentColor;
  d: path("M2 18V6h20v12h-2v-2h-4v2h-2V8H4v10zm14-8h4V8h-4zm0 4h4v-2h-4z");
}
</style><path class="dvtcp1b1f"/>`,
		"fallback": "material-symbols:desk-outline",
	});
}

export default Component;
