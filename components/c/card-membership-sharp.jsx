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
		"content": `<style>.r1g338btr {
  fill: currentColor;
  d: path("M2 2h20v15h-6v5l-4-2l-4 2v-5H2zm2 11h16v-3H4z");
}
</style><path class="r1g338btr"/>`,
		"fallback": "material-symbols:card-membership-sharp",
	});
}

export default Component;
