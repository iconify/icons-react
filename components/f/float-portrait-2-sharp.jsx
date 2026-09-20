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
		"content": `<style>.o3wf_qb2l {
  fill: currentColor;
  d: path("M8 11h6V6H8zm12 11H4V2h16z");
}
</style><path class="o3wf_qb2l"/>`,
		"fallback": "material-symbols:float-portrait-2-sharp",
	});
}

export default Component;
