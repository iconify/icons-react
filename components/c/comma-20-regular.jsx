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
		"content": `<style>.y-4f_6b9d {
  fill: currentColor;
  d: path("M13.5 7.5a3.5 3.5 0 1 0-1.28 2.707c-.262 1.167-.693 2.133-1.236 2.881C10.071 14.348 8.84 15 7.5 15a.5.5 0 0 0 0 1c1.698 0 3.217-.839 4.294-2.325C12.866 12.197 13.5 10.086 13.5 7.5");
}
</style><path class="y-4f_6b9d"/>`,
		"fallback": "fluent:comma-20-regular",
	});
}

export default Component;
