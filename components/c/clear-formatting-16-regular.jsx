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
		"content": `<style>.obsf3abtr {
  fill: currentColor;
  d: path("M2.75 2a.5.5 0 0 0-.485.379l-.25 1a.5.5 0 1 0 .97.242L3.14 3h2.723l-1.4 8h-.736a.5.5 0 0 0 0 1h2.295a5.6 5.6 0 0 1 0-1h-.544l1.4-8H9.86l-.095.379a.5.5 0 1 0 .97.242l.25-1A.5.5 0 0 0 10.5 2zM1.5 13h4.707q.149.524.393 1H1.5a.5.5 0 0 1 0-1M16 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L11.5 10.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L12.207 11.5z");
}
</style><path class="obsf3abtr"/>`,
		"fallback": "fluent:clear-formatting-16-regular",
	});
}

export default Component;
