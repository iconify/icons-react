import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr5f0eiog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kr5f0eiog"/>`,
		"fallback": "reicon:alert-filled",
	});
}

export default Component;
