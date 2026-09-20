import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlz6nfoqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tlz6nfoqo"/>`,
		"fallback": "reicon:bag-2-filled",
	});
}

export default Component;
