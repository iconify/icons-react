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
		"content": `<style>.hpjyso61k {
  fill: currentColor;
  d: path("M11 13v5h-1v-4H6v-1zm3-7v4h4v1h-5V6z");
}
</style><path class="hpjyso61k"/>`,
		"fallback": "material-symbols-light:collapse-content-sharp",
	});
}

export default Component;
