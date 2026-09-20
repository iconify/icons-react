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
		"content": `<style>.wtw2t2byk {
  fill: currentColor;
  d: path("M10 22v-8H7V2h10l-2 7h4z");
}
</style><path class="wtw2t2byk"/>`,
		"fallback": "material-symbols:flash-on-sharp",
	});
}

export default Component;
