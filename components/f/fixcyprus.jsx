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
		"content": `<style>.fu6c81b7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.269 43.5h31.462m-3.479 0l-9.191-39h-5.703l-9.19 39m22.034-6.807H14.217m18.145-8.462H16.058m14.464-8.462H17.898m10.784-8.462h-8.944");
}
</style><path class="fu6c81b7c"/>`,
		"fallback": "arcticons:fixcyprus",
	});
}

export default Component;
