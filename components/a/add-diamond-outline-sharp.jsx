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
		"content": `<style>.lq74pnbnj {
  fill: currentColor;
  d: path("M11 16h2v-3h3v-2h-3V8h-2v3H8v2h3zm1.025 6.85L1.225 12l10.8-10.825L22.775 12zM12 20l7.975-8L12 4l-7.975 8zm0-8");
}
</style><path class="lq74pnbnj"/>`,
		"fallback": "material-symbols:add-diamond-outline-sharp",
	});
}

export default Component;
