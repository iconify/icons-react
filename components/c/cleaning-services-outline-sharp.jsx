import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fmoj1jb3l {
  fill: currentColor;
  d: path("M4 22V11.712h5.712V2h4.577v9.712H20V22zm1-1h2.75v-4.02h1V21h2.75v-4.02h1V21h2.75v-4.02h1V21H19v-8.288H5zm8.289-9.288V3h-2.577v8.712zm0 0h-2.577z");
}
</style><path class="fmoj1jb3l"/>`,
		"fallback": "material-symbols-light:cleaning-services-outline-sharp",
	});
}

export default Component;
