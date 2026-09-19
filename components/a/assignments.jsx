import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jq9ky7bgs.css';
import '../../css/i/itbxvoegv.css';
import '../../css/n/ninpmzvqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jq9ky7bgs"/><path class="itbxvoegv"/><path class="ninpmzvqt"/></g>`,
		"fallback": "hugeicons:assignments",
	});
}

export default Component;
