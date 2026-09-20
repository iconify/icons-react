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
		"content": `<style>.nmdukbb3i {
  fill: currentColor;
  d: path("M17.812 17.289L7.712 7.208V16.5h-1v-11h11v1H8.419L18.5 16.6z");
}
</style><path class="nmdukbb3i"/>`,
		"fallback": "material-symbols-light:arrow-insert-sharp",
	});
}

export default Component;
