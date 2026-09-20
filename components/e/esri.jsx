import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsz-j-bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsz-j-bym"/>`,
		"fallback": "simple-icons:esri",
	});
}

export default Component;
