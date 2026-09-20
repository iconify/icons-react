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
		"content": `<style>.viwrbjb_p {
  fill: currentColor;
  d: path("M7.75 17.116V6.885h1v10.23zM11.5 21V3h1v18zM4 13.308v-2.616h1v2.616zm11.25 3.807V6.885h1v10.23zM19 13.308v-2.616h1v2.616z");
}
</style><path class="viwrbjb_p"/>`,
		"fallback": "material-symbols-light:graphic-eq-sharp",
	});
}

export default Component;
