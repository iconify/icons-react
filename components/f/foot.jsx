import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5xy30yhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5xy30yhx"/>`,
		"fallback": "icon-park-outline:foot",
	});
}

export default Component;
