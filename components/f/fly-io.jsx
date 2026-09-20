import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkl2gcbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkl2gcbxk"/>`,
		"fallback": "thesvg-color:fly-io",
	});
}

export default Component;
