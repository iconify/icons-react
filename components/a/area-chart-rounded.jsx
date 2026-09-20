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
		"content": `<style>.nz34wgihi {
  fill: currentColor;
  d: path("m21 16l-7.775-6.075q-.675-.525-1.512-.413t-1.338.813l-2.15 2.95q-.25.35-.663.413t-.762-.213L3 10.5V9q0-.625.55-.9t1.05.1L7 10l3.775-5.275q.5-.7 1.35-.825t1.525.425L17 7h2q.825 0 1.413.588T21 9zM3 20v-7l3.375 2.7q.675.55 1.513.425t1.337-.825l2.175-2.975q.25-.35.663-.412t.762.212l8.175 6.4V20z");
}
</style><path class="nz34wgihi"/>`,
		"fallback": "material-symbols:area-chart-rounded",
	});
}

export default Component;
