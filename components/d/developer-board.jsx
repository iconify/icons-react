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
		"content": `<style>.xac-jc4fv {
  fill: currentColor;
  d: path("M4.846 20q-.69 0-1.153-.462t-.462-1.153V5.615q0-.69.462-1.152T4.846 4h12.77q.69 0 1.152.463t.463 1.153v2.153h1.538v1h-1.538V11.5h1.538v1h-1.538v2.73h1.538v1h-1.538v2.155q0 .69-.463 1.152T17.616 20zM7 16.23h4.039v-3.038H7zm5.423-6.422h3.039V7.769h-3.039zm-5.423 2h4.039V7.769H7zm5.423 4.423h3.039v-5.039h-3.039z");
}
</style><path class="xac-jc4fv"/>`,
		"fallback": "material-symbols-light:developer-board",
	});
}

export default Component;
