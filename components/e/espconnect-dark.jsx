import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etg9crbrk.css';
import '../../css/x/x2l7nqbwr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etg9crbrk"/><path class="x2l7nqbwr"/>`,
		"fallback": "selfhst:espconnect-dark",
	});
}

export default Component;
