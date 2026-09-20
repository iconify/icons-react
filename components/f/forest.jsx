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
		"content": `<style>.k33gp4bvz {
  fill: currentColor;
  d: path("M14 21v-3.23h2V21zm-6 0v-4H1.885l3.965-6H3.923L9 3.73L14.077 11H12.15l3.971 6H10v4zm9.039-4l-3.462-5.23h1.983l-3.09-4.404L15 3.731L20.077 11H18.15l3.966 6z");
}
</style><path class="k33gp4bvz"/>`,
		"fallback": "material-symbols-light:forest",
	});
}

export default Component;
