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
		"content": `<style>.o-pztebuf {
  fill: currentColor;
  d: path("M3 21V3h10v2H5v14h14v-8h2v10zm3-4h12l-3.75-5l-3 4L9 13zm11-8V7h-2V5h2V3h2v2h2v2h-2v2z");
}
</style><path class="o-pztebuf"/>`,
		"fallback": "material-symbols:add-photo-alternate-outline-sharp",
	});
}

export default Component;
