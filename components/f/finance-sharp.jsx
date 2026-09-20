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
		"content": `<style>.ba-b4lb8p {
  fill: currentColor;
  d: path("M3 21V3h2v16h16v2zm3-3V9h4v9zm5 0V4h4v14zm5 0v-5h4v5z");
}
</style><path class="ba-b4lb8p"/>`,
		"fallback": "material-symbols:finance-sharp",
	});
}

export default Component;
