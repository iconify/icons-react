import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ou1iozb5f {
  fill: currentColor;
  d: path("M5.5 18h17.75c.59 0 .95-.65.635-1.15l-3.999-6.35l3.999-6.35A.75.75 0 0 0 23.25 3H4.75a.75.75 0 0 0-.75.75v20.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="ou1iozb5f"/>`,
		"fallback": "fluent:flag-28-filled",
	});
}

export default Component;
