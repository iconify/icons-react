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
		"content": `<style>.b9r-16fsm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 2.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M.5 10a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0");
}
</style><path clip-rule="evenodd" class="b9r-16fsm"/>`,
		"fallback": "pepicons-pop:circle-big",
	});
}

export default Component;
