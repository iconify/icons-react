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
		"content": `<style>.mc4qo8b8m {
  fill: currentColor;
  d: path("M1.5 13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0-11a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm3 10A1.5 1.5 0 0 1 3 10.5v-5A1.5 1.5 0 0 1 4.5 4h1A1.5 1.5 0 0 1 7 5.5v5A1.5 1.5 0 0 1 5.5 12zM4 10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm5 0a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 4h-1A1.5 1.5 0 0 0 9 5.5zm1.5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5z");
}
</style><path class="mc4qo8b8m"/>`,
		"fallback": "fluent:align-stretch-vertical-16-regular",
	});
}

export default Component;
