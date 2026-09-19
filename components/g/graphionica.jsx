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
		"content": `<style>.k3_6mnbff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.481 23.195c-2.295-8.662-7.33-15.03-12.29-12.29S10.56 31.562 24.72 44c8.83-9.033 19.195-36.945 11.199-39.685S24 17.42 23.48 23.195");
}
</style><path class="k3_6mnbff"/>`,
		"fallback": "arcticons:graphionica",
	});
}

export default Component;
