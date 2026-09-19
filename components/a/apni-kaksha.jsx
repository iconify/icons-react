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
		"content": `<style>.ezfw9-p_o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.068 42.5l13.012-37l11.695 36.551M12.926 22.998l20.272-8.914m-8.271 9.692l17.005-7.957");
}
</style><path class="ezfw9-p_o"/>`,
		"fallback": "arcticons:apni-kaksha",
	});
}

export default Component;
