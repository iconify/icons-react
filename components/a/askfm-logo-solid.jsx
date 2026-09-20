import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds3z54bye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ds3z54bye"/>`,
		"fallback": "streamline-logos:askfm-logo-solid",
	});
}

export default Component;
