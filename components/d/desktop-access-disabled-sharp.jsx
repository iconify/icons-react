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
		"content": `<style>.sijxulk3e {
  fill: currentColor;
  d: path("M20.462 21.492L15.969 17H13v2h2v1H9v-1h2v-2H3V4.04h1.425v1.416L1.777 2.808l.708-.708l18.684 18.685zm-.396-4.642L7.216 4H21v12.85z");
}
</style><path class="sijxulk3e"/>`,
		"fallback": "material-symbols-light:desktop-access-disabled-sharp",
	});
}

export default Component;
