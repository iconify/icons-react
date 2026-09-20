import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gcosbhb5k {
  fill: currentColor;
  d: path("M39.56 32.06a1.5 1.5 0 0 1-2.12 0L24 18.622l-13.44 13.44a1.5 1.5 0 0 1-2.12-2.122l14.5-14.5a1.5 1.5 0 0 1 2.12 0l14.5 14.5a1.5 1.5 0 0 1 0 2.122");
}
</style><path class="gcosbhb5k"/>`,
		"fallback": "fluent:chevron-up-48-filled",
	});
}

export default Component;
