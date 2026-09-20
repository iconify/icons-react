import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg1ear06l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg1ear06l"/>`,
		"fallback": "pinhead:canoe-under-list-beside-checkmark",
	});
}

export default Component;
