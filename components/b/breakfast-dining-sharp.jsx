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
		"content": `<style>.qtd40padb {
  fill: currentColor;
  d: path("M5 20V9.873q-.829-.492-1.414-1.212Q3 7.94 3 7q0-1.246.877-2.123T6 4h12q1.246 0 2.123.877T21 7q0 .94-.585 1.66q-.586.72-1.415 1.213V20zm7-3.177L15.862 13L12 9.139L8.177 13zm0-1.415L9.592 13L12 10.554L14.446 13z");
}
</style><path class="qtd40padb"/>`,
		"fallback": "material-symbols-light:breakfast-dining-sharp",
	});
}

export default Component;
