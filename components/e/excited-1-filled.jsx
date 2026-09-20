import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooifsjb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooifsjb9q"/>`,
		"fallback": "tdesign:excited-1-filled",
	});
}

export default Component;
