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
		"content": `<style>.zh02y_4vw {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v5A2.5 2.5 0 0 0 4.5 12h5A2.5 2.5 0 0 0 12 9.5v-5A2.5 2.5 0 0 0 9.5 2zM3.085 4A1.5 1.5 0 0 1 4.5 3h5a1.5 1.5 0 0 1 1.415 1zM3 5h8v4.5A1.5 1.5 0 0 1 9.5 11h-5A1.5 1.5 0 0 1 3 9.5zm3.5 9a2.5 2.5 0 0 1-2-1h5.25A3.25 3.25 0 0 0 13 9.75V4.5c.607.456 1 1.182 1 2v3.25A4.25 4.25 0 0 1 9.75 14z");
}
</style><path class="zh02y_4vw"/>`,
		"fallback": "fluent:calendar-multiple-16-regular",
	});
}

export default Component;
