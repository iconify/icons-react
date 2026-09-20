import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/p/p4bv4bc-d.css';
import '../../css/s/s79wbqbwh.css';
import '../../css/r/r8ovt4b1d.css';
import '../../css/z/zmeiiibon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="p4bv4bc-d"/><path class="s79wbqbwh"/><path class="r8ovt4b1d"/><path class="zmeiiibon"/></g>`,
		"fallback": "streamline-sharp-color:cupcake",
	});
}

export default Component;
