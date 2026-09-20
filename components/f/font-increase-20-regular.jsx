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
		"content": `<style>.d8pts2g_e {
  fill: currentColor;
  d: path("M13.854 4.854a.5.5 0 0 1-.707-.708l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.708L15.5 3.207zM10 4a.5.5 0 0 0-.463.31l-4.5 11a.5.5 0 1 0 .926.38L7.5 11.93V12h5v-.068l1.537 3.757a.5.5 0 1 0 .926-.378l-4.5-11A.5.5 0 0 0 10 4m0 1.82L12.119 11H7.88z");
}
</style><path class="d8pts2g_e"/>`,
		"fallback": "fluent:font-increase-20-regular",
	});
}

export default Component;
