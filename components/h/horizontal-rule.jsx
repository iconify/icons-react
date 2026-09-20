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
		"content": `<style>.hi3dvnf7f {
  fill: currentColor;
  d: path("M4 13v-2h16v2z");
}
</style><path class="hi3dvnf7f"/>`,
		"fallback": "material-symbols:horizontal-rule",
	});
}

export default Component;
