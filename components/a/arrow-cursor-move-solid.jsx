import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfgqfdb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zfgqfdb3c"/>`,
		"fallback": "streamline-sharp:arrow-cursor-move-solid",
	});
}

export default Component;
