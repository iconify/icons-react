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
		"content": `<style>.crjrgdb2m {
  fill: currentColor;
  d: path("M2 20V4h20v8H4v6h10v2zM4 8h16V6H4zm15 14v-3h-3v-2h3v-3h2v3h3v2h-3v3zM4 18V6z");
}
</style><path class="crjrgdb2m"/>`,
		"fallback": "material-symbols:add-card-outline-sharp",
	});
}

export default Component;
