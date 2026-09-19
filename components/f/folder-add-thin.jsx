import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1ui6ccaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1ui6ccaq"/>`,
		"fallback": "iconamoon:folder-add-thin",
	});
}

export default Component;
