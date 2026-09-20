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
		"content": `<style>.u9905qbep {
  fill: currentColor;
  d: path("M16.5 22v-3H14l3.5-5v3H20zM8 22q-.425 0-.712-.288T7 21V5q0-.425.288-.712T8 4h2V2h4v2h2q.425 0 .713.288T17 5v7q-.525 0-1.025.088T15 12.35V6H9v10h2.35q-.175.475-.262.975T11 18q0 1.15.4 2.175T12.525 22z");
}
</style><path class="u9905qbep"/>`,
		"fallback": "material-symbols:battery-charging-30-outline",
	});
}

export default Component;
