import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u52tohwdy {
  fill: currentColor;
  d: path("M5.25 8.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m.258-4.84a.5.5 0 0 1 .984 0l.008.09V6l-.008.09a.5.5 0 0 1-.984 0L5.5 6V3.5zM11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0m-1 0a4 4 0 1 0-8 0a4 4 0 0 0 8 0");
}
</style><path class="u52tohwdy"/>`,
		"fallback": "fluent:error-circle-12-regular",
	});
}

export default Component;
