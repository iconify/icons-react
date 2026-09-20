import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psoeldpuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psoeldpuj"/>`,
		"fallback": "simple-icons:hexo",
	});
}

export default Component;
