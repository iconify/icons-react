import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsc6dmdar.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsc6dmdar"/>`,
		"fallback": "ant-design:file-ppt-outline",
	});
}

export default Component;
