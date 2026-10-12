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
		"content": `<style>.xcgbnlbjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c2.4 1.8 4 3.9 4 6.25a4 4 0 0 1-2.4 3.67l.577 1.897l2.073.933h-8.5l2.073-.933l.577-1.897A4 4 0 0 1 8 9c0-2.35 1.6-4.45 4-6.25Zm2 3.5L11.5 9M5 18.5h14v2.75H5z");
}
</style><path class="xcgbnlbjv"/>`,
		"fallback": "iconoven:chess-bishop-sharp",
	});
}

export default Component;
