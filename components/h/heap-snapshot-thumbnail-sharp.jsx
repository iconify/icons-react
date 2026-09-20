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
		"content": `<style>.yx6owyyuq {
  fill: currentColor;
  d: path("M1 19V5h14v14zm16-8V5h6v6zm0 8v-6h6v6zm-6.5-3q.625 0 1.063-.437T12 14.5t-.437-1.062T10.5 13t-1.062.438T9 14.5t.438 1.063T10.5 16m-5.05-.05l6.5-6.5l-1.4-1.4l-6.5 6.5zM5.5 11q.625 0 1.062-.437T7 9.5t-.437-1.062T5.5 8t-1.062.438T4 9.5t.438 1.063T5.5 11");
}
</style><path class="yx6owyyuq"/>`,
		"fallback": "material-symbols:heap-snapshot-thumbnail-sharp",
	});
}

export default Component;
