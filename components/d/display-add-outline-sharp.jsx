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
		"content": `<style>.ohgwrpa9t {
  fill: currentColor;
  d: path("M4 5v12zm4 16v-2H2V3h11.35q-.175.475-.262.975T13 5H4v12h16v-6.075q.55-.1 1.05-.275t.95-.45V19h-6v2zM18 9V6h-3V4h3V1h2v3h3v2h-3v3z");
}
</style><path class="ohgwrpa9t"/>`,
		"fallback": "material-symbols:display-add-outline-sharp",
	});
}

export default Component;
