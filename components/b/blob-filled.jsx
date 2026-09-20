import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj7__abnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj7__abnm"/>`,
		"fallback": "tabler:blob-filled",
	});
}

export default Component;
