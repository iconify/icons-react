import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yln92w6ab.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yln92w6ab"/>`,
		"fallback": "ant-design:anthropic-filled",
	});
}

export default Component;
