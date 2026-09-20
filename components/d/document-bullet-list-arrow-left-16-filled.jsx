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
		"content": `<style>.r-gwh-bce {
  fill: currentColor;
  d: path("M9 1v3.5A1.5 1.5 0 0 0 10.5 6H14v7.5a1.5 1.5 0 0 1-1.5 1.5H8.663a5.5 5.5 0 0 0 1.737-2h1.1a.5.5 0 0 0 0-1h-.707q.137-.484.185-1h.522a.5.5 0 0 0 0-1h-.522a5.5 5.5 0 0 0-.185-1h.707a.5.5 0 0 0 0-1h-1.1A5.5 5.5 0 0 0 4 5.207V2.5A1.5 1.5 0 0 1 5.5 1zm1 .25V4.5a.5.5 0 0 0 .5.5h3.25zM5.5 15a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m-2.353-4.854l-.003.003a.5.5 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L4.707 11H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 1 0-.708-.708z");
}
</style><path class="r-gwh-bce"/>`,
		"fallback": "fluent:document-bullet-list-arrow-left-16-filled",
	});
}

export default Component;
