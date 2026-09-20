import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xn64t3bsq {
  fill: currentColor;
  d: path("M10.619 5a1 1 0 0 0-.853.478l-6.124 10a1 1 0 0 0 0 1.044l6.124 10a1 1 0 0 0 .853.478h10.758a1 1 0 0 0 .853-.478l6.12-10a1 1 0 0 0 0-1.044l-6.12-10A1 1 0 0 0 21.377 5zM8.06 4.433A3 3 0 0 1 10.62 3h10.758a3 3 0 0 1 2.56 1.434l6.119 10a3 3 0 0 1 0 3.132l-6.12 10A3 3 0 0 1 21.377 29H10.62a3 3 0 0 1-2.559-1.433l-6.123-10a3 3 0 0 1 0-3.134z");
}
</style><path class="xn64t3bsq"/>`,
		"fallback": "fluent:hexagon-32-regular",
	});
}

export default Component;
