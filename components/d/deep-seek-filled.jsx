import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyz5hkbaw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyz5hkbaw"/>`,
		"fallback": "ant-design:deep-seek-filled",
	});
}

export default Component;
