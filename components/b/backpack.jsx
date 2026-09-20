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
		"content": `<style>.gbzaribtb {
  fill: currentColor;
  d: path("M6.616 21q-.667 0-1.141-.462T5 19.442V8.404q0-1.27.85-2.221T8 5.053V3h2v2h4V3h2v2.054q1.3.177 2.15 1.129t.85 2.22v11.04q0 .632-.475 1.095t-1.14.462zm8.5-5.423h1v-2.923H7.885v1h7.23z");
}
</style><path class="gbzaribtb"/>`,
		"fallback": "material-symbols-light:backpack",
	});
}

export default Component;
