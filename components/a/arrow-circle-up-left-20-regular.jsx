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
		"content": `<style>.nsmpw10oj {
  fill: currentColor;
  d: path("M7.149 7.144A.5.5 0 0 1 7.5 7h5a.5.5 0 0 1 0 1H8.707l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707V12.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .144-.351zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0");
}
</style><path class="nsmpw10oj"/>`,
		"fallback": "fluent:arrow-circle-up-left-20-regular",
	});
}

export default Component;
