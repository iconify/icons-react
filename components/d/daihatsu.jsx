import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xhruk-bze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.317 16.336H4.5l10.22 11.632l-2.384 3.696c18.345-3.53 32.17-6.548 31.107-10.015c-1.386-4.522-25.211-5.06-33.867-5.105l8.51 9.275l3.23-.75");
}
</style><path class="xhruk-bze"/>`,
		"fallback": "arcticons:daihatsu",
	});
}

export default Component;
