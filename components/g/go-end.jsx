import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w833t_opg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w833t_opg"/>`,
		"fallback": "icon-park-outline:go-end",
	});
}

export default Component;
