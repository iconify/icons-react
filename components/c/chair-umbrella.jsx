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
		"content": `<style>.x-urfmy-o {
  fill: currentColor;
  d: path("M12.5 21V10q-.35-.45-.862-.725T10.5 9t-1.137.263T8.5 10h-2q0-2.925 2.038-4.962T13.5 3t4.963 2.038T20.5 10h-2q-.35-.475-.862-.737T16.5 9t-1.137.275T14.5 10v11zm3.5 0v-6h6v6h-2v-4h-2v4zM4 21v-3.05q-.45-.125-.75-.475t-.35-.85L2 7h.625q.575 0 1.013.4t.487.975l.6 6.625H9q.825 0 1.413.588T11 17v1h-1v3H8.5v-3h-3v3z");
}
</style><path class="x-urfmy-o"/>`,
		"fallback": "material-symbols:chair-umbrella",
	});
}

export default Component;
