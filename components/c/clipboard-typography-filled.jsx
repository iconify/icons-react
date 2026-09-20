import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2gdeacls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2gdeacls"/>`,
		"fallback": "tabler:clipboard-typography-filled",
	});
}

export default Component;
