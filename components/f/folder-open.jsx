import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xag_4tblj.css';
import '../../css/w/wjb62bbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer xag_4tblj"/><path class="duoicon-primary-layer wjb62bbwh"/>`,
		"fallback": "duo-icons:folder-open",
	});
}

export default Component;
