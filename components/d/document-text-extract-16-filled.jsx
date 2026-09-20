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
		"content": `<style>.ye8k20h_u {
  fill: currentColor;
  d: path("M8 4.5A1.5 1.5 0 0 0 9.5 6H13v7.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5V12h3.5a1.5 1.5 0 0 0 0-3H3V2.5A1.5 1.5 0 0 1 4.5 1H8zM5.5 13a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm1-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm-1-3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm7.25-2H9.5a.5.5 0 0 1-.5-.5V1.25z");
}
</style><path class="ye8k20h_u"/>`,
		"fallback": "fluent:document-text-extract-16-filled",
	});
}

export default Component;
