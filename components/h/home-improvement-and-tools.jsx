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
		"content": `<style>.jn-26sb5l {
  fill: currentColor;
  d: path("M6 2h12l-3 4.2V10H9V6.2zm3 10h6v2H9zm0 4h6v3l-3 3l-3-3z");
}
</style><path class="jn-26sb5l"/>`,
		"fallback": "material-symbols:home-improvement-and-tools",
	});
}

export default Component;
