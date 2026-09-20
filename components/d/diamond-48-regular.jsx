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
		"content": `<style>.ciyv9lbep {
  fill: currentColor;
  d: path("M19.582 4.83a6.25 6.25 0 0 1 8.84 0l14.752 14.753a6.25 6.25 0 0 1 0 8.839L28.421 43.175a6.25 6.25 0 0 1-8.839 0L4.83 28.422a6.25 6.25 0 0 1 0-8.84zm7.072 1.768a3.75 3.75 0 0 0-5.303 0L6.598 21.35a3.75 3.75 0 0 0 0 5.304l14.753 14.753a3.75 3.75 0 0 0 5.303 0l14.753-14.753a3.75 3.75 0 0 0 0-5.304z");
}
</style><path class="ciyv9lbep"/>`,
		"fallback": "fluent:diamond-48-regular",
	});
}

export default Component;
