import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llhiuft-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llhiuft-q"/>`,
		"fallback": "simple-icons:backstage-casting",
	});
}

export default Component;
