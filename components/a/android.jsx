import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isi942u_q.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isi942u_q"/>`,
		"fallback": "wpf:android",
	});
}

export default Component;
