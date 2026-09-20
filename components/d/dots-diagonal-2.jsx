import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb717xbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb717xbba"/>`,
		"fallback": "tabler:dots-diagonal-2",
	});
}

export default Component;
