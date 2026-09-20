import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuww5n5ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuww5n5ea"/>`,
		"fallback": "reicon:euro2-filled",
	});
}

export default Component;
