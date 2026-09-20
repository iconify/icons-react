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
		"content": `<style>.pcegas82u {
  fill: currentColor;
  d: path("M4 5v12zm5 15v-2H3V4h9.812q-.08.244-.119.485q-.04.24-.058.515H4v12h16v-5.825q.28-.061.521-.15q.24-.089.479-.21V18h-6v2zm9-11V6h-3V5h3V2h1v3h3v1h-3v3z");
}
</style><path class="pcegas82u"/>`,
		"fallback": "material-symbols-light:display-add-outline-sharp",
	});
}

export default Component;
