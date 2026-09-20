import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx87-6t2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx87-6t2p"/>`,
		"fallback": "thesvg:dunzo",
	});
}

export default Component;
