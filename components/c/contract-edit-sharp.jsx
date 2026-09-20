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
		"content": `<style>.ntvpt9b3p {
  fill: currentColor;
  d: path("M11.846 21H6q-.846 0-1.423-.577T4 19v-2.77h3V3h13v6.577l-1 1V4H8v12.23h5.346l-1.5 1.5zm2.385 0v-2.21l5.96-5.934l2.184 2.21L16.441 21zm-4.846-9.846v-1h8.23v1zm0-2.77v-1h8.23v1zm10.806 7.632l.925-.956l-.925-.944l-.95.95z");
}
</style><path class="ntvpt9b3p"/>`,
		"fallback": "material-symbols-light:contract-edit-sharp",
	});
}

export default Component;
