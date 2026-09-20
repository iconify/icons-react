import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-qpncbgr.css';
import '../../css/m/mhmmosloz.css';
import '../../css/i/ijbewqbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-qpncbgr"/><path class="mhmmosloz"/><path class="ijbewqbzo"/>`,
		"fallback": "streamline-ultimate:database-share-1-bold",
	});
}

export default Component;
