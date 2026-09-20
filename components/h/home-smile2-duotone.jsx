import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p2rqquj_r.css';
import '../../css/n/nuhceqbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p2rqquj_r"/><path class="nuhceqbkl"/></g>`,
		"fallback": "reicon:home-smile2-duotone",
	});
}

export default Component;
