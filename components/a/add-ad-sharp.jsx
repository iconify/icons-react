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
		"content": `<style>.q-8_jfm5y {
  fill: currentColor;
  d: path("M18 20v-3h-3v-2h3v-3h2v3h3v2h-3v3zM1 21V3h18v7h-2V8H3v11h13v2z");
}
</style><path class="q-8_jfm5y"/>`,
		"fallback": "material-symbols:add-ad-sharp",
	});
}

export default Component;
