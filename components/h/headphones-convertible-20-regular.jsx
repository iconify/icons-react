import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cnaw7n36n {
  fill: currentColor;
  d: path("M3.347 5.559a.478.478 0 0 1 .738-.06a.53.53 0 0 1 .058.667A6.97 6.97 0 0 0 3 10.001V11h3.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H4a2 2 0 0 1-2-2v-5.999a7.96 7.96 0 0 1 1.347-4.442M10 2a8 8 0 0 1 8 8.001V16a2 2 0 0 1-2 2h-2.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H17v-.999A7 7 0 0 0 6.165 4.144a.53.53 0 0 1-.666-.059a.478.478 0 0 1 .059-.738A7.96 7.96 0 0 1 10 2M3 16a1 1 0 0 0 1 1h2v-5H3zm11 1h2a1 1 0 0 0 1-1v-4h-3z");
}
</style><path class="cnaw7n36n"/>`,
		"fallback": "fluent:headphones-convertible-20-regular",
	});
}

export default Component;
