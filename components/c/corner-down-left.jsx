import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nslvppb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nslvppb9f"/>`,
		"fallback": "gg:corner-down-left",
	});
}

export default Component;
