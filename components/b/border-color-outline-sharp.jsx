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
		"content": `<style>.znahdub7k {
  fill: currentColor;
  d: path("M2 24v-2h20v2zm4-7.173h1.073l8.8-8.794l-.532-.552l-.547-.527L6 15.754zm-1 1v-2.5L16.952 3.381l2.488 2.505L7.5 17.828zM18.02 5.881l-1.074-1.073zm-2.147 2.152l-.533-.552l-.546-.527z");
}
</style><path class="znahdub7k"/>`,
		"fallback": "material-symbols-light:border-color-outline-sharp",
	});
}

export default Component;
