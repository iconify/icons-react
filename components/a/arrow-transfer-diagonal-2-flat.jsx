import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zoldi4b3u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zoldi4b3u"/>`,
		"fallback": "streamline-color:arrow-transfer-diagonal-2-flat",
	});
}

export default Component;
