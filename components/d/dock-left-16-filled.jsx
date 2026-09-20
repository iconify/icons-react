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
		"content": `<style>.o-u1vtvqs {
  d: path("M12.004 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 1H7v8h5.005a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="o-u1vtvqs"/>`,
		"fallback": "fluent:dock-left-16-filled",
	});
}

export default Component;
