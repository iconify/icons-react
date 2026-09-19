import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqbk1mbcv.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqbk1mbcv"/>`,
		"fallback": "whh:cannon",
	});
}

export default Component;
