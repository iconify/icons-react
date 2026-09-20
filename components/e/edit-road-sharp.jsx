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
		"content": `<style>.vwae12bzm {
  fill: currentColor;
  d: path("M16 11.664V5h1v5.664zM5 19V5h1v14zm5.5-10.98V5h1v3.02zm0 5.48v-3.02h1v3.02zm0 5.5v-3.02h1V19zm3.73 0v-2.21l5.96-5.934l2.19 2.204L16.44 19zm5.96-4.985l.925-.956l-.924-.943l-.95.95z");
}
</style><path class="vwae12bzm"/>`,
		"fallback": "material-symbols-light:edit-road-sharp",
	});
}

export default Component;
