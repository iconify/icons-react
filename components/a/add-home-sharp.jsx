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
		"content": `<style>.s2a-14b1g {
  fill: currentColor;
  d: path("M17.5 19h1v-2.5H21v-1h-2.5V13h-1v2.5H15v1h2.5zm-3.037.538Q13 18.075 13 16t1.463-3.537T18 11t3.538 1.463T23 16t-1.463 3.538T18 21t-3.537-1.463M4 19V7l8-6l8 6v2.3q-.5-.15-1-.225T18 9q-2.925 0-4.962 2.038T11 16q0 .8.163 1.55t.512 1.45z");
}
</style><path class="s2a-14b1g"/>`,
		"fallback": "material-symbols:add-home-sharp",
	});
}

export default Component;
