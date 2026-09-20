import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6xikjl8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s6xikjl8q"/>`,
		"fallback": "reicon:circle-arrow-right-filled",
	});
}

export default Component;
