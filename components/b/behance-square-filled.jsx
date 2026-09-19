import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wum6unbqa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wum6unbqa"/>`,
		"fallback": "ant-design:behance-square-filled",
	});
}

export default Component;
