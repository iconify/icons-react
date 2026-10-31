import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm_0jcbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm_0jcbxu"/>`,
		"fallback": "coolicons:bank-fill-round",
	});
}

export default Component;
