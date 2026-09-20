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
		"content": `<style>.indgsqbax {
  fill: currentColor;
  d: path("M15 5V3h2v2zm0 16v-2h2v2zm4-16V3h2v2zm0 16v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zM9 21H3V3h6v2H5v14h4zm2 2V1h2v22z");
}
</style><path class="indgsqbax"/>`,
		"fallback": "material-symbols:flip-outline-sharp",
	});
}

export default Component;
