import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncy1prbdg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncy1prbdg"/>`,
		"fallback": "ant-design:caret-right-fill",
	});
}

export default Component;
