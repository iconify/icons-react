import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.omcg0dleb {
  fill: currentColor;
  d: path("M3 14.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m1.146-9.146a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L4.854 5.354a.5.5 0 0 1-.708 0");
}
</style><path class="omcg0dleb"/>`,
		"fallback": "fluent:arrow-export-up-16-regular",
	});
}

export default Component;
