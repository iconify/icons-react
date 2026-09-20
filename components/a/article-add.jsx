import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjn7jibdx.css';
import '../../css/x/xd_e_q94j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjn7jibdx"/><path class="xd_e_q94j"/>`,
		"fallback": "ooui:article-add",
	});
}

export default Component;
