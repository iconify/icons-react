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
		"content": `<style>.xxy80xwem {
  fill: currentColor;
  d: path("M27 7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16.5 7a.5.5 0 0 0 0 1h6.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3A.5.5 0 0 0 25 7.503v-.006a.5.5 0 0 0-.146-.35l-3-3a.5.5 0 0 0-.708.707L23.293 7zm4 8a7.48 7.48 0 0 0 5.5-2.4v4.65A3.75 3.75 0 0 1 22.25 21h-5.941l-6.535 4.715C8.616 26.55 7 25.723 7 24.295V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h8.75a7.5 7.5 0 0 0 6 12");
}
</style><path class="xxy80xwem"/>`,
		"fallback": "fluent:comment-arrow-right-28-filled",
	});
}

export default Component;
