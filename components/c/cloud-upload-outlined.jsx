import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elmx5rbsv.css';
import '../../css/w/w893w9fet.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elmx5rbsv"/><path class="w893w9fet"/>`,
		"fallback": "ant-design:cloud-upload-outlined",
	});
}

export default Component;
