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
		"content": `<style>.sn5anri7w {
  fill: currentColor;
  d: path("M4.385 17q-.994 0-1.69-.695T2 14.615v-5.23q0-.994.696-1.69T4.385 7H17.5q.994 0 1.689.696t.696 1.689v5.23q0 .994-.696 1.69T17.5 17zM6 16h11.5q.579 0 .982-.398t.403-.986V9.385q0-.589-.399-.987Q18.089 8 17.5 8H6zm14.885-1.884V9.904h.307q.344 0 .576.232t.232.576v2.596q0 .343-.232.575t-.576.233z");
}
</style><path class="sn5anri7w"/>`,
		"fallback": "material-symbols-light:battery-android-1-outline",
	});
}

export default Component;
