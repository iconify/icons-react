import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfsrp3blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfsrp3blm"/>`,
		"fallback": "streamline-ultimate:casino-lucky-7-bold",
	});
}

export default Component;
