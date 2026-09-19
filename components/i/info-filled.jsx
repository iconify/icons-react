import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiyys2sek.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiyys2sek"/>`,
		"fallback": "ep:info-filled",
	});
}

export default Component;
