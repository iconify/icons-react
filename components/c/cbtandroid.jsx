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
		"content": `<style>.c9n2xebha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m13.572 24.768l3.263 10.693l6.556-.037c-2.236 8.161-10.932 8.8-15.249 4.279c-4.431-4.64-3.308-13.765 5.43-14.936zm20.856 0L31.165 35.46l-6.556-.037c2.237 8.161 10.932 8.8 15.249 4.279c4.432-4.64 3.308-13.765-5.43-14.936zm-18.196-6.722l8.058-6.33l8.065 6.584c2.615-6.884-1.603-12.78-7.853-12.8c-6.417-.02-11.359 6.456-8.27 12.545z");
}
</style><path class="c9n2xebha"/>`,
		"fallback": "arcticons:cbtandroid",
	});
}

export default Component;
