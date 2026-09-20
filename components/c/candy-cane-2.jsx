import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg029z55y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tg029z55y"/>`,
		"fallback": "lineicons:candy-cane-2",
	});
}

export default Component;
