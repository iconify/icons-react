import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp2n7ka7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pp2n7ka7j"/>`,
		"fallback": "mono-icons:flag",
	});
}

export default Component;
