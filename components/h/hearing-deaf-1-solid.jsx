import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w791oeaba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w791oeaba"/>`,
		"fallback": "streamline-sharp:hearing-deaf-1-solid",
	});
}

export default Component;
