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
		"content": `<style>.e07jyib1a {
  fill: currentColor;
  d: path("M19.582 4.83a6.25 6.25 0 0 1 8.84 0l14.752 14.753a6.25 6.25 0 0 1 0 8.839L28.421 43.175a6.25 6.25 0 0 1-8.839 0L4.831 28.422a6.25 6.25 0 0 1 0-8.84z");
}
</style><path class="e07jyib1a"/>`,
		"fallback": "fluent:diamond-48-filled",
	});
}

export default Component;
