import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc11kh5kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc11kh5kq"/>`,
		"fallback": "cbi:hapag-lloyd",
	});
}

export default Component;
