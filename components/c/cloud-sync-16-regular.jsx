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
		"content": `<style>.imuzq04fd {
  fill: currentColor;
  d: path("M8 3a3 3 0 0 0-3 3a.5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.772q.048.516.185 1H4.25a3.25 3.25 0 0 1-.22-6.493a4 4 0 0 1 7.887-.323a5.5 5.5 0 0 0-1.084-.174A3 3 0 0 0 8 3m2.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M13 8v1.5a.5.5 0 0 1-.5.5H11a.5.5 0 0 1 0-1h.47a1.996 1.996 0 0 0-2.57.55a.5.5 0 0 1-.8-.6a2.996 2.996 0 0 1 3.9-.8V8a.5.5 0 0 1 1 0m-4.5 5.5A.5.5 0 0 1 8 13v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 0 1h-.47a1.996 1.996 0 0 0 2.57-.55a.5.5 0 1 1 .8.6a2.996 2.996 0 0 1-3.9.799V13a.5.5 0 0 1-.5.5");
}
</style><path class="imuzq04fd"/>`,
		"fallback": "fluent:cloud-sync-16-regular",
	});
}

export default Component;
