import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoayjgb4p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoayjgb4p"/>`,
		"fallback": "uiw:folder-open",
	});
}

export default Component;
