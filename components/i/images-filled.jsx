import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqygs8_op.css';
import '../../css/b/bog62tbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqygs8_op"/><path class="bog62tbai"/>`,
		"fallback": "boxicons:images-filled",
	});
}

export default Component;
