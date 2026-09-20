import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x3a8tbb5s {
  fill: currentColor;
  d: path("m6.113 11l-.095.08c-.296.257-.518.496-.683.806c-.13.247-.256.595-.31 1.114h5.946c-.054-.52-.179-.868-.31-1.114c-.164-.31-.386-.55-.681-.806L9.885 11z");
}
</style><path class="x3a8tbb5s"/>`,
		"fallback": "fluent:hourglass-one-quarter-16-filled",
	});
}

export default Component;
