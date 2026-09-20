import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zslk5ulvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zslk5ulvf"/>`,
		"fallback": "selfhst:falcon-player-dark",
	});
}

export default Component;
