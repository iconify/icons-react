import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj2htzoyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gj2htzoyw"/>`,
		"fallback": "streamline-ultimate:air-conditioner-rear-1-bold",
	});
}

export default Component;
