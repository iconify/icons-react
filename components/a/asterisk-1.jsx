import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeef006fl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeef006fl"/>`,
		"fallback": "streamline:asterisk-1",
	});
}

export default Component;
