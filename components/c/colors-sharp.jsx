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
		"content": `<style>.bvjesyblb {
  fill: currentColor;
  d: path("m9.825 21.675l-8.5-8.5l6.925-6.9l-2.65-2.65L7.15 2l11.175 11.175zm0-13.825l-5.35 5.35h10.7zM19.8 21q-.9 0-1.525-.638T17.65 18.8q0-.675.338-1.275t.762-1.175L19.8 15l1.1 1.35q.4.575.75 1.175T22 18.8q0 .925-.65 1.563T19.8 21");
}
</style><path class="bvjesyblb"/>`,
		"fallback": "material-symbols:colors-sharp",
	});
}

export default Component;
