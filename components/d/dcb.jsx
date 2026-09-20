import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/actx8vb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="actx8vb0b"/>`,
		"fallback": "token:dcb",
	});
}

export default Component;
