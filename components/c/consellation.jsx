import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnh3mtb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnh3mtb-q"/>`,
		"fallback": "streamline-sharp:consellation",
	});
}

export default Component;
