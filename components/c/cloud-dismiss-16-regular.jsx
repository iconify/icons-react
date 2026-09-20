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
		"content": `<style>.eyfprdb0x {
  fill: currentColor;
  d: path("M8 3a3 3 0 0 0-3 3a.5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.772q.048.516.185 1H4.25a3.25 3.25 0 0 1-.22-6.493a4 4 0 0 1 7.887-.323a5.5 5.5 0 0 0-1.084-.174A3 3 0 0 0 8 3m7 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L10.5 9.793L9.354 8.646a.5.5 0 1 0-.708.708L9.793 10.5l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L11.207 10.5z");
}
</style><path class="eyfprdb0x"/>`,
		"fallback": "fluent:cloud-dismiss-16-regular",
	});
}

export default Component;
