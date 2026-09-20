import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrjb4xbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrjb4xbib"/>`,
		"fallback": "uit:check",
	});
}

export default Component;
