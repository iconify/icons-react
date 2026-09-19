import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iimzk-bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iimzk-bcx"/>`,
		"fallback": "grommet-icons:bold",
	});
}

export default Component;
