import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtpb7vbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtpb7vbof"/>`,
		"fallback": "mdi:emoticon-tongue",
	});
}

export default Component;
