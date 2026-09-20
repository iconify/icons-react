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
		"content": `<style>.uw3p7un1x {
  fill: currentColor;
  d: path("M8 4a3.5 3.5 0 0 1 3.163 5H10a2.5 2.5 0 1 0-2 1h5.293l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H8a3.5 3.5 0 1 1 0-7m-3.742 6c.253.378.561.715.913 1H2.5a.5.5 0 0 1 0-1z");
}
</style><path class="uw3p7un1x"/>`,
		"fallback": "fluent:arrow-sprint-16-regular",
	});
}

export default Component;
