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
		"content": `<style>.a_5v0h8vo {
  fill: currentColor;
  d: path("M14.5 18.5q.625 0 1.063-.437T16 17t-.437-1.062T14.5 15.5t-1.062.438T13 17t.438 1.063t1.062.437m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zm.05-4.95q.625 0 1.063-.437T11 12t-.437-1.062T9.5 10.5t-1.062.438T8 12t.438 1.063T9.5 13.5M4 22V2h10l6 6v14zm9-13V4H6v16h12V9zM6 4v5zv16z");
}
</style><path class="a_5v0h8vo"/>`,
		"fallback": "material-symbols:heap-snapshot-large-outline-sharp",
	});
}

export default Component;
