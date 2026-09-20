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
		"content": `<style>.s4a6i79hw {
  fill: currentColor;
  d: path("M11.5 14.077v-8h1v8zm0 3.846v-1h1v1zM6.23 22H3.617q-.691 0-1.153-.462T2 20.385v-2.616h1v2.616q0 .269.173.442t.443.173H6.23zm11.54 0v-1h2.615q.269 0 .442-.173t.173-.442v-2.616h1v2.616q0 .69-.462 1.152T20.385 22zM2 6.23V3.617q0-.691.463-1.153T3.616 2H6.23v1H3.616q-.27 0-.443.173T3 3.616V6.23zm19 0V3.617q0-.27-.173-.443T20.385 3h-2.616V2h2.616q.69 0 1.152.463T22 3.616V6.23z");
}
</style><path class="s4a6i79hw"/>`,
		"fallback": "material-symbols-light:frame-exclamation",
	});
}

export default Component;
