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
		"content": `<style>.cyjhhmb2c {
  fill: currentColor;
  d: path("M18.5 20V7.8l-1.1 1.1L16 7.5L19.5 4L23 7.5l-1.425 1.4L20.5 7.825V20zM3 18v-4.075l7.375-7.35q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4L7.075 18zm2-2h1.25l4.05-4.05l-.625-.625l-.625-.625L5 14.75zm6.725-5.475l-1.25-1.25z");
}
</style><path class="cyjhhmb2c"/>`,
		"fallback": "material-symbols:edit-arrow-up-outline-sharp",
	});
}

export default Component;
