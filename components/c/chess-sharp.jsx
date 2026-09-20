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
		"content": `<style>.u6f5ibbof {
  fill: currentColor;
  d: path("M3 22v-6h3.3l.55-4H4v-2h16v2h-2.85l.55 4H21v6zM6.45 8.5L5 2q.825.625 1.7 1.175t1.925.55q1 0 1.838-.513T12 2q.7.7 1.538 1.213t1.837.512q1.05 0 1.925-.55T19 2l-1.425 6.5z");
}
</style><path class="u6f5ibbof"/>`,
		"fallback": "material-symbols:chess-sharp",
	});
}

export default Component;
