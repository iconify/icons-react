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
		"content": `<style>.u9jj98bqf {
  fill: currentColor;
  d: path("M17.063 17.063q.437-.438.437-1.063t-.437-1.062T16 14.5t-1.062.438T14.5 16t.438 1.063T16 17.5t1.063-.437m-4-4q.437-.438.437-1.063t-.437-1.062T12 10.5t-1.062.438T10.5 12t.438 1.063T12 13.5t1.063-.437m-4-4Q9.5 8.625 9.5 8t-.437-1.062T8 6.5t-1.062.438T6.5 8t.438 1.063T8 9.5t1.063-.437M3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="u9jj98bqf"/>`,
		"fallback": "material-symbols:ifl-outline-sharp",
	});
}

export default Component;
