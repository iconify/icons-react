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
		"content": `<style>.cp3oi9bpb {
  fill: currentColor;
  d: path("m8 22l1-7H4l9-13h2l-1 8h6L10 22z");
}
</style><path class="cp3oi9bpb"/>`,
		"fallback": "material-symbols:bolt-sharp",
	});
}

export default Component;
