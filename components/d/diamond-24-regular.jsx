import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wsj1pjbwq {
  fill: currentColor;
  d: path("M9.714 1.962a3.25 3.25 0 0 1 4.596 0l7.75 7.75a3.25 3.25 0 0 1 0 4.596l-7.75 7.75a3.25 3.25 0 0 1-4.596 0l-7.75-7.75a3.25 3.25 0 0 1 0-4.596zm3.535 1.06a1.75 1.75 0 0 0-2.475 0l-7.75 7.75a1.75 1.75 0 0 0 0 2.475l7.75 7.75a1.75 1.75 0 0 0 2.475 0l7.75-7.75a1.75 1.75 0 0 0 0-2.474z");
}
</style><path class="wsj1pjbwq"/>`,
		"fallback": "fluent:diamond-24-regular",
	});
}

export default Component;
