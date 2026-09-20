import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx2p0jj_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx2p0jj_j"/>`,
		"fallback": "simple-icons:i3",
	});
}

export default Component;
