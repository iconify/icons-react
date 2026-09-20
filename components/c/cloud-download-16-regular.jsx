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
		"content": `<style>.jqltfofpy {
  fill: currentColor;
  d: path("M8 3a3 3 0 0 0-3 3a.5.5 0 0 1-.5.5h-.25a2.25 2.25 0 0 0 0 4.5h.772q.048.516.185 1H4.25a3.25 3.25 0 0 1-.22-6.493a4 4 0 0 1 7.887-.323a5.5 5.5 0 0 0-1.084-.174A3 3 0 0 0 8 3m7 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4.854 2.353l.003.003a.5.5 0 0 0 .348.144h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 0 0-.707-.708L11 11.293V8.5a.5.5 0 0 0-1 0v2.793l-1.146-1.147a.5.5 0 0 0-.708.708z");
}
</style><path class="jqltfofpy"/>`,
		"fallback": "fluent:cloud-download-16-regular",
	});
}

export default Component;
