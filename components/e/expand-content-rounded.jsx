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
		"content": `<style>.u3geqvb9c {
  fill: currentColor;
  d: path("M7 17h3.5q.213 0 .356.144t.144.357t-.144.356T10.5 18H6.808q-.343 0-.576-.232T6 17.192V13.5q0-.213.144-.356T6.501 13t.356.144T7 13.5zM17 7h-3.5q-.213 0-.356-.144T13 6.499t.144-.356T13.5 6h3.692q.344 0 .576.232t.232.576V10.5q0 .213-.144.356t-.357.144t-.356-.144T17 10.5z");
}
</style><path class="u3geqvb9c"/>`,
		"fallback": "material-symbols-light:expand-content-rounded",
	});
}

export default Component;
