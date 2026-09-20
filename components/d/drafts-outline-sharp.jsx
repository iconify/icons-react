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
		"content": `<style>.c4g9elb0o {
  fill: currentColor;
  d: path("m12 1l10 5.975V21H2V6.975zm0 11.65L19.8 8L12 3.35L4.2 8zM12 15l-8-4.8V19h16v-8.8zm0 4h8H4z");
}
</style><path class="c4g9elb0o"/>`,
		"fallback": "material-symbols:drafts-outline-sharp",
	});
}

export default Component;
