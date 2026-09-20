import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emnh37b7g.css';
import '../../css/z/zq6-f5buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emnh37b7g"/><path class="zq6-f5buz"/>`,
		"fallback": "token:ctsi",
	});
}

export default Component;
