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
		"content": `<style>.lld_o-b7o {
  fill: currentColor;
  d: path("M4 6.6v12h6v-10h2v10h6v-11h2.175L19 8.75l1.4 1.425L24 6.6L20.4 3L19 4.425L20.175 5.6H16v11h-2v-10H8v10H6v-10zm-3 15v-10h22v10z");
}
</style><path class="lld_o-b7o"/>`,
		"fallback": "material-symbols:heat-pump-balance-sharp",
	});
}

export default Component;
