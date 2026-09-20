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
		"content": `<style>.z168vib-h {
  fill: currentColor;
  d: path("M12.75 2.5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5.06L5.06 12h3.19a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v3.19L10.94 4H7.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="z168vib-h"/>`,
		"fallback": "fluent:arrow-maximize-16-filled",
	});
}

export default Component;
