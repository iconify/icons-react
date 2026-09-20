import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxcbvvf1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxcbvvf1j"/>`,
		"fallback": "tabler:box-align-bottom-left-filled",
	});
}

export default Component;
