import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my3o8r57x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my3o8r57x"/>`,
		"fallback": "tabler:contrast-2-filled",
	});
}

export default Component;
