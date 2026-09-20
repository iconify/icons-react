import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvpxlyn_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvpxlyn_i"/>`,
		"fallback": "thesvg-color:activision",
	});
}

export default Component;
