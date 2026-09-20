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
		"content": `<style>.b-nlkacko {
  fill: currentColor;
  d: path("M4.095 13a1.497 1.497 0 0 0 1.772.952l3.112-.767l.21-.064l.025-.009q.132-.05.26-.112H16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z");
}
</style><path class="b-nlkacko"/>`,
		"fallback": "fluent:color-line-accent-20-regular",
	});
}

export default Component;
