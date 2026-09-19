import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn_d-xbux.css';

const viewBox = {"width":621,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn_d-xbux"/>`,
		"fallback": "ls:d-upper-case",
	});
}

export default Component;
