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
		"content": `<style>.uac25ubcp {
  fill: currentColor;
  d: path("M13.25 3c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25v-6.5C1 3.784 1.784 3 2.75 3zM2.75 4a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75zM5.5 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4m7 3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-7-2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m7-1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1z");
}
</style><path class="uac25ubcp"/>`,
		"fallback": "fluent:contact-card-generic-16-regular",
	});
}

export default Component;
