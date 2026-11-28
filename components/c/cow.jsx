import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iazjm4e3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iazjm4e3a"/>`,
		"fallback": "noviair:cow",
	});
}

export default Component;
