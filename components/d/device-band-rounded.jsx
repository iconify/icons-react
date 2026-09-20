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
		"content": `<style>.pbx7n1qgg {
  fill: currentColor;
  d: path("M10.48 21q-.69 0-1.152-.462t-.462-1.153V8.73h-.193q-.213 0-.357-.153q-.143-.153-.143-.347v-.962q0-.194.143-.347t.357-.153h.193V4.616q0-.691.462-1.153T10.481 3H13.5q.69 0 1.153.463t.463 1.153v2.153h.192q.213 0 .357.153q.143.153.143.347v.962q0 .194-.143.347q-.144.153-.357.153h-.192v10.654q0 .69-.463 1.153T13.5 21z");
}
</style><path class="pbx7n1qgg"/>`,
		"fallback": "material-symbols-light:device-band-rounded",
	});
}

export default Component;
