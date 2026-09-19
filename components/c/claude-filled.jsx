import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftij1dlzv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftij1dlzv"/>`,
		"fallback": "ant-design:claude-filled",
	});
}

export default Component;
