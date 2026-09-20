import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hp43mdb1v {
  fill: currentColor;
  d: path("M6 2h8a2 2 0 0 1 2 2v2.336a1.5 1.5 0 0 0-.98 1.662h-.52a1.5 1.5 0 0 0-.001 3h.522A1.5 1.5 0 0 0 16 12.664V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.336a1.5 1.5 0 0 0 .98-1.662h.52a1.5 1.5 0 0 0 .001-3H4.98A1.5 1.5 0 0 0 4 6.335V4a2 2 0 0 1 2-2M3.876 7.42a.5.5 0 0 1-.047.706L2.831 9H5.5a.5.5 0 1 1 0 1H2.83l1 .874a.5.5 0 0 1-.66.752l-2-1.75a.5.5 0 0 1 0-.752l2-1.75a.5.5 0 0 1 .706.047M17.17 10l-.998.874a.5.5 0 0 0 .658.752l2-1.75a.5.5 0 0 0 0-.752l-2-1.75a.5.5 0 0 0-.658.752L17.17 9l-2.669-.003a.5.5 0 0 0 0 1z");
}
</style><path class="hp43mdb1v"/>`,
		"fallback": "fluent:document-width-20-filled",
	});
}

export default Component;
