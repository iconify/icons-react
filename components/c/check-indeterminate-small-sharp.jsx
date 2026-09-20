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
		"content": `<style>.v_w9du6kn {
  fill: currentColor;
  d: path("M6 13v-2h12v2z");
}
</style><path class="v_w9du6kn"/>`,
		"fallback": "material-symbols:check-indeterminate-small-sharp",
	});
}

export default Component;
