import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uyy4hxb5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.375 43.5H25.09c-2.587 0-17.465 0-17.465-19.726C7.624 4.05 23.61 4.5 23.61 4.5h11.755v7.684l-11.302.084c-7.315 1.192-6.699 8.179-6.699 8.179s-.082 1.313-.082 5.915s1.808 6.7 1.808 6.7c1.85 2.546 5.384 2.63 5.384 2.63h8.096V28.5h-7.808v-7.19h15.615Z");
}
</style><path class="uyy4hxb5z"/>`,
		"fallback": "arcticons:geizhals",
	});
}

export default Component;
