import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/ynz9scf9p.css';
import '../../css/n/n3rgr7haw.css';
import '../../css/f/fvzgndqwy.css';
import '../../css/u/unxdowbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ynz9scf9p"/><rect class="n3rgr7haw"/><rect class="fvzgndqwy"/><path class="unxdowbbs"/></g>`,
		"fallback": "bitcoin-icons:battery-3-outline",
	});
}

export default Component;
