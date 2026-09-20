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
		"content": `<style>.m8t1gzhon {
  fill: currentColor;
  d: path("M12.487 10a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M9.605 2.014A.5.5 0 0 0 9 2.502v15a.5.5 0 0 0 .605.489l7-1.501a.5.5 0 0 0 .394-.49V4a.5.5 0 0 0-.395-.488zM10 16.883V3.12l6 1.285v11.192zm-1.998.115v-1H4V4.003h4.002v-1H3.5a.5.5 0 0 0-.5.5v12.995a.5.5 0 0 0 .5.5z");
}
</style><path class="m8t1gzhon"/>`,
		"fallback": "fluent:conference-room-20-regular",
	});
}

export default Component;
