import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw-3dzecl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw-3dzecl"/>`,
		"fallback": "streamline-sharp-color:gender-lesbian-2",
	});
}

export default Component;
