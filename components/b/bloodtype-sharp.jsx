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
		"content": `<style>.wru81-bxs {
  fill: currentColor;
  d: path("M6.288 19.65Q4 17.3 4 13.8q0-2.5 1.988-5.437T12 2q4.025 3.425 6.013 6.363T20 13.8q0 3.5-2.287 5.85T12 22t-5.712-2.35M9 18h6v-2H9zm2-3h2v-2h2v-2h-2V9h-2v2H9v2h2z");
}
</style><path class="wru81-bxs"/>`,
		"fallback": "material-symbols:bloodtype-sharp",
	});
}

export default Component;
