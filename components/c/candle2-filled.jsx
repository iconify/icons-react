import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj0l3fb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj0l3fb7p"/>`,
		"fallback": "reicon:candle2-filled",
	});
}

export default Component;
