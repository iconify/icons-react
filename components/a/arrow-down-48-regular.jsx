import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fm4k82bbn {
  fill: currentColor;
  d: path("M25.25 5.25a1.25 1.25 0 1 0-2.5 0v32.446L10.141 24.874a1.25 1.25 0 1 0-1.782 1.752l14.75 15a1.25 1.25 0 0 0 1.782 0l14.75-15a1.25 1.25 0 1 0-1.782-1.752L25.25 37.696z");
}
</style><path class="fm4k82bbn"/>`,
		"fallback": "fluent:arrow-down-48-regular",
	});
}

export default Component;
