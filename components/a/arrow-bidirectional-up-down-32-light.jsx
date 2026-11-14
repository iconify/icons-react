import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k9w6_hbal {
  fill: currentColor;
  d: path("M15.147 3.146a.5.5 0 0 1 .707 0l7.5 7.5a.5.5 0 0 1-.707.707L16 4.708v22.586l6.647-6.646a.5.5 0 1 1 .707.707l-7.5 7.5a.5.5 0 0 1-.707 0l-7.5-7.5a.5.5 0 1 1 .706-.707L15 27.293V4.707l-6.647 6.647a.5.5 0 1 1-.707-.707z");
}
</style><path class="k9w6_hbal"/>`,
		"fallback": "fluent:arrow-bidirectional-up-down-32-light",
	});
}

export default Component;
