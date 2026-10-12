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
		"content": `<style>.xr0z4kowf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3c2.25 2.1 3.25 3.8 3.25 5.4a3.25 3.25 0 0 1-6.5 0c0-1.6 1-3.3 3.25-5.4Zm-1.75 15.25V14h3.5v4.25m-8 0h12.5v3H5.75zm8-2.5h4");
}
</style><path class="xr0z4kowf"/>`,
		"fallback": "iconoven:bunsen-burner-sharp",
	});
}

export default Component;
