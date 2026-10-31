import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxr7riqlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxr7riqlp"/>`,
		"fallback": "coolicons:book-fill-round",
	});
}

export default Component;
