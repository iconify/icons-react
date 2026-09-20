import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btc7y3bwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btc7y3bwj"/>`,
		"fallback": "thesvg-color:ark-ecosystem",
	});
}

export default Component;
