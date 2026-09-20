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
		"content": `<style>.k2drqtb5a {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V8H4zm6.95-2.18l-2.858-2.858l.72-.72l2.138 2.139l4.239-4.239l.719.72zM4 18V6z");
}
</style><path class="k2drqtb5a"/>`,
		"fallback": "material-symbols-light:domain-verification-outline-sharp",
	});
}

export default Component;
