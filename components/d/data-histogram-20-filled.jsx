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
		"content": `<style>.mqp_e_b6g {
  fill: currentColor;
  d: path("M12 4.5A1.5 1.5 0 0 0 10.5 3h-1A1.5 1.5 0 0 0 8 4.5V17h4zM13 6v11h3.5a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2zM5 9h2v8H3.5a.5.5 0 0 1-.5-.5V11a2 2 0 0 1 2-2");
}
</style><path class="mqp_e_b6g"/>`,
		"fallback": "fluent:data-histogram-20-filled",
	});
}

export default Component;
