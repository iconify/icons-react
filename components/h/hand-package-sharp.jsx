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
		"content": `<style>.pbc0febjs {
  fill: currentColor;
  d: path("M7 11V2h8v9zm10 0V2h5v9zM8 21v-8h6.8q.35 0 .6.2t.35.475t.038.575t-.338.525L13.975 16H10v1.5h4.5l4.05-3.35q.55-.4 1.163-.5t1.212.05t1.138.513t.912.937l-7 5.85zm-6 1v-9h4v9z");
}
</style><path class="pbc0febjs"/>`,
		"fallback": "material-symbols:hand-package-sharp",
	});
}

export default Component;
