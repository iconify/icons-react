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
		"content": `<style>.fq-aohbnb {
  fill: currentColor;
  d: path("M7 12.5v-1h10v1z");
}
</style><path class="fq-aohbnb"/>`,
		"fallback": "material-symbols-light:check-indeterminate-small-outline-sharp",
	});
}

export default Component;
