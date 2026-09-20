import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zit7jnb6w {
  fill: currentColor;
  d: path("M19 4.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M9.172 15.595a3.502 3.502 0 0 0 6.826-1.094a3.5 3.5 0 0 0-3.086-3.476a6.01 6.01 0 0 1-3.74 4.57M12 10a5 5 0 1 1-10 0a5 5 0 0 1 10 0M7.029 7.505a.5.5 0 0 0 .304.638c.71.251 1.274.814 1.525 1.524a.5.5 0 1 0 .942-.334A3.5 3.5 0 0 0 7.667 7.2a.5.5 0 0 0-.638.305");
}
</style><path class="zit7jnb6w"/>`,
		"fallback": "fluent:bubble-multiple-20-filled",
	});
}

export default Component;
