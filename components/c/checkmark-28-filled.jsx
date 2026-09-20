import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cn0o6_bpj {
  fill: currentColor;
  d: path("m10.5 19.586l-6.293-6.293a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l14-14a1 1 0 0 0-1.414-1.414z");
}
</style><path class="cn0o6_bpj"/>`,
		"fallback": "fluent:checkmark-28-filled",
	});
}

export default Component;
