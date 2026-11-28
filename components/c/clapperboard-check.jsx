import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb6cpgbxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb6cpgbxc"/>`,
		"fallback": "noviair:clapperboard-check",
	});
}

export default Component;
