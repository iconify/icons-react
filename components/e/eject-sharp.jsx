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
		"content": `<style>.xx5h6vmwk {
  fill: currentColor;
  d: path("M6.154 18.346v-.923h11.692v.923zm.158-3.692L12 6.154l5.689 8.5z");
}
</style><path class="xx5h6vmwk"/>`,
		"fallback": "material-symbols-light:eject-sharp",
	});
}

export default Component;
