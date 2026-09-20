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
		"content": `<style>.lxnikdbrl {
  fill: currentColor;
  d: path("M15.879 5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.121l-4.44 4.44a1.5 1.5 0 0 1-2.12-2.122zM4 8.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5m13.854-5.646a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 .708.708z");
}
</style><path class="lxnikdbrl"/>`,
		"fallback": "fluent:check-20-filled",
	});
}

export default Component;
