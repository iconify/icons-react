import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqi0cpb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hqi0cpb2s"/>`,
		"fallback": "griddy-icons:generate-image",
	});
}

export default Component;
