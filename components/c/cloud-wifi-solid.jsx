import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-trz4bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p-trz4bsf"/>`,
		"fallback": "streamline-sharp:cloud-wifi-solid",
	});
}

export default Component;
