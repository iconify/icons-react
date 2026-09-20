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
		"content": `<style>.odv875mne {
  fill: currentColor;
  d: path("M20 22V2h2v20zM2 22V2h2v20zm11-12V7h5v3zm-7 0V7h5v3zm7 7v-3h5v3zm-7 0v-3h5v3z");
}
</style><path class="odv875mne"/>`,
		"fallback": "material-symbols:align-justify-stretch-outline",
	});
}

export default Component;
