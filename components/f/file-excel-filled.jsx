import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf52asb6i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf52asb6i"/>`,
		"fallback": "ant-design:file-excel-filled",
	});
}

export default Component;
