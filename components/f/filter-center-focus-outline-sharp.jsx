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
		"content": `<style>.dia_yga2c {
  fill: currentColor;
  d: path("M4 20v-5h1v4h4v1zm11 0v-1h4v-4h1v5zM4 9V4h5v1H5v4zm15 0V5h-4V4h5v5zm-8.423 4.423Q10 12.846 10 12t.577-1.423T12 10t1.423.577T14 12t-.577 1.423T12 14t-1.423-.577m2.136-.71Q13 12.425 13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13t.713-.288");
}
</style><path class="dia_yga2c"/>`,
		"fallback": "material-symbols-light:filter-center-focus-outline-sharp",
	});
}

export default Component;
