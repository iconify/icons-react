import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hahwoqbgh {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 160a8 8 0 1 1-8 8a8 8 0 0 1 8-8M48 48h32v97.38a24 24 0 1 0 16 0v-30.07l48 48V208H48Zm160 160h-48v-48a8 8 0 0 0-2.34-5.66L96 92.69V48h32v24a8 8 0 0 0 2.34 5.66l16 16A23.74 23.74 0 0 0 144 104a24 24 0 1 0 24-24a23.74 23.74 0 0 0-10.34 2.35L144 68.69V48h64zM168 96a8 8 0 1 1-8 8a8 8 0 0 1 8-8");
}
</style><path class="hahwoqbgh"/>`,
		"fallback": "ph:circuitry",
	});
}

export default Component;
