import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntd1ge7ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntd1ge7ni"/>`,
		"fallback": "thesvg-color:citrix",
	});
}

export default Component;
