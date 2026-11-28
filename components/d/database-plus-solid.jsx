import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv_tlnb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv_tlnb9v"/>`,
		"fallback": "iconaut:database-plus-solid",
	});
}

export default Component;
