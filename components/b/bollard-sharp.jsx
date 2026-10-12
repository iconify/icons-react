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
		"content": `<style>.i4n15cbvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25V10h4v11.25Zm7.25 0V7.5h4v13.75Zm7.25 0V10h4v11.25ZM2.75 15.5h4m3.25-2h4m3.25 2h4");
}
</style><path class="i4n15cbvy"/>`,
		"fallback": "iconoven:bollard-sharp",
	});
}

export default Component;
