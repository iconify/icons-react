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
		"content": `<style>.t96m4wjqw {
  fill: currentColor;
  d: path("M11 17h2v-5h-2zm1.713-7.288Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288M4 21V9l8-6l8 6v12z");
}
</style><path class="t96m4wjqw"/>`,
		"fallback": "material-symbols:help-clinic",
	});
}

export default Component;
