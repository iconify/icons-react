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
		"content": `<style>.oitue3cpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.25v-2.5h2C8 15.75 10.5 14 12.5 11l2.25-3.5l1.542-2.472L17.75 7.55l3.5 5.7v2.25c-4.25 0-7.75 1.5-9.75 3.75H2.75zm17.25-2v5");
}
</style><path class="oitue3cpc"/>`,
		"fallback": "iconoven:high-heel-sharp",
	});
}

export default Component;
