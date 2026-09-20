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
		"content": `<style>.hmat00bwy {
  fill: currentColor;
  d: path("M14 6.5h-.5V6c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7.5c1.103 0 2-.897 2-2v-.5h.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M12 10a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 .5.5z");
}
</style><path class="hmat00bwy"/>`,
		"fallback": "fluent:battery-10-16-filled",
	});
}

export default Component;
