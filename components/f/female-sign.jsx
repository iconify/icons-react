import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j71m3fb1u {
  fill: var(--svg-color--fcc21b, #fcc21b);
}

.mpgc93byo {
  d: path("M83.65 111.532H43.34v-16.86h40.31zM63.5 4.68c-22.57 0-40.87 18.3-40.87 40.87s18.3 40.87 40.87 40.87s40.87-18.3 40.87-40.87S86.07 4.68 63.5 4.68m0 64.89c-13.26 0-24.02-10.75-24.02-24.02c0-13.26 10.75-24.02 24.02-24.02s24.02 10.75 24.02 24.02c0 13.26-10.76 24.02-24.02 24.02");
}

.st9ctubpp {
  d: path("M71.926 83.696v40.31h-16.86v-40.31z");
}
</style><g class="j71m3fb1u"><path class="st9ctubpp"/><path class="mpgc93byo"/></g>`,
		"fallback": "noto-v1:female-sign",
	});
}

export default Component;
