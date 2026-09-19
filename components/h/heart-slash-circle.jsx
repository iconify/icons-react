import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuxz6hvqq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuxz6hvqq"/>`,
		"fallback": "f7:heart-slash-circle",
	});
}

export default Component;
