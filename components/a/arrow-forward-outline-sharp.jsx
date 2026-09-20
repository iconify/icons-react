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
		"content": `<style>.z6_7142ta {
  fill: currentColor;
  d: path("M17.079 12.5H5v-1h12.079l-5.792-5.792L12 5l7 7l-7 7l-.713-.708z");
}
</style><path class="z6_7142ta"/>`,
		"fallback": "material-symbols-light:arrow-forward-outline-sharp",
	});
}

export default Component;
