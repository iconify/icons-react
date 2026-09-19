import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk73dkq3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zk73dkq3z"/>`,
		"fallback": "griddy-icons:cafe-filled",
	});
}

export default Component;
