import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rebt0moqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rebt0moqu"/>`,
		"fallback": "mage:edit-pen",
	});
}

export default Component;
