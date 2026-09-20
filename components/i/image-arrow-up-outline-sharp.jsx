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
		"content": `<style>.slpt10bsm {
  fill: currentColor;
  d: path("M3 21V3h10v2H5v14h14v-7h2v9zm3-4h12l-3.75-5l-3 4L9 13zm12-7V5.825L16.4 7.4L15 6l4-4l4 4l-1.4 1.4L20 5.825V10z");
}
</style><path class="slpt10bsm"/>`,
		"fallback": "material-symbols:image-arrow-up-outline-sharp",
	});
}

export default Component;
