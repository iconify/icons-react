import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jofnmtrzd.css';

const viewBox = {"width":1600,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jofnmtrzd"/>`,
		"fallback": "fa:bug",
	});
}

export default Component;
