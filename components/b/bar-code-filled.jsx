import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm1r5-bms.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zm1r5-bms"/>`,
		"fallback": "lsicon:bar-code-filled",
	});
}

export default Component;
