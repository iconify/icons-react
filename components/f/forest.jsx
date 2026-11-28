import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz2dn1bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz2dn1bhr"/>`,
		"fallback": "noviair:forest",
	});
}

export default Component;
