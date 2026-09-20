import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p5j740bwl {
  fill: currentColor;
  d: path("M4.616 17q-.691 0-1.153-.462T3 15.385v-6.77q0-.69.463-1.152T4.615 7h14.77q.69 0 1.152.463T21 8.616v6.769q0 .69-.463 1.153T19.385 17zm0-1h14.769q.269 0 .442-.173t.173-.442v-6.77q0-.269-.173-.442T19.385 8H4.615q-.269 0-.442.173T4 8.616v6.769q0 .269.173.442t.443.173m2.942-1.5h.884v-2.058H10.5v-.884H8.442V9.5h-.884v2.058H5.5v.884h2.058zM4 16V8z");
}
</style><path class="p5j740bwl"/>`,
		"fallback": "material-symbols-light:buttons-alt-outline",
	});
}

export default Component;
