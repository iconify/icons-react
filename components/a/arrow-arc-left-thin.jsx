import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.keqqppb5g {
  fill: currentColor;
  d: path("M228 184a4 4 0 0 1-8 0a92 92 0 0 0-157-65l-29.3 29H88a4 4 0 0 1 0 8H24a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v54.39l29.3-29.11A100 100 0 0 1 228 184");
}
</style><path class="keqqppb5g"/>`,
		"fallback": "ph:arrow-arc-left-thin",
	});
}

export default Component;
