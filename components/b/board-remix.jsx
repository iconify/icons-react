import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldch-ca-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ldch-ca-z"/>`,
		"fallback": "streamline-sharp:board-remix",
	});
}

export default Component;
